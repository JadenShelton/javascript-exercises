const findTheOldest = function(people) {
    let ages = people.map((person) => {
        const stat = {
            name: person.name,
            age: person.yearOfDeath - person.yearOfBirth,
        }
    });

    return ages.sort().pop();
};

// Do not edit below this line
module.exports = findTheOldest;
