// made a function that accepts an array of characters then returns an array of reversed characters
var reverseString = function (str) {
    var leftIndex = 0; // save the left index number
    var rightIndex = str.length - 1; // save the last index
    while (leftIndex < rightIndex) {
        var temp = str[leftIndex];
        // save the last index value in temp;
        str[leftIndex] = str[rightIndex]; // switch it up
        str[rightIndex] = temp;
        // change indexes
        leftIndex++;
        rightIndex++;
    }
    return str;
};
var str = 'nachiket';
var strChars = str.split("");
reverseString(strChars);
