/*Write an efficient function that
checks whether any permutation of an input string is a palindrome.*/
var pali = 'civic';
var nopali = 'what';
var isPalindrome = function (word) {
    var wordArray = word.split("");
    var charSet = new Set();
    wordArray.forEach(function (char) {
        if (charSet.has(char)) {
            charSet["delete"](char);
        }
        else {
            charSet.add(char);
        }
    });
    return charSet.size <= 1;
};
var x = isPalindrome(pali);
console.log(x);
