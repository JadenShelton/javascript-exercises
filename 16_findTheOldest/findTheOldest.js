const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    let oldestPerson = people.reduce((oldest, current) => {
        if(oldest.yearOfDeath === undefined) {
            return (current.yearOfDeath - current.yearOfBirth) > (currentYear - oldest.yearOfBirth) ? current : oldest;
        }
        if(current.yearOfDeath === undefined) {
            return (currentYear - current.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth) ? current : oldest;
        } else {
            return (current.yearOfDeath - current.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth) ? current : oldest;
        }
    },);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
