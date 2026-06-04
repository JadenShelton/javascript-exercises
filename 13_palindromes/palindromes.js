const palindromes = function (string) {
    string = string.toLowerCase();
    let palindrome =[];
    for(let i = 0; i < string.length; i++) {
        if(/^[a-zA-Z0-9]+$/.test(string[i])) {
            palindrome.push(string[i])
        }
    }
    let reverse = palindrome.toReversed();
    if(palindrome.every((value, index) => value === reverse[index])) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
