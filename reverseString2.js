"use strict";
// made a function that accepts an array of characters then returns an array of reversed characters
const reverseString = (str) => {
    let leftIndex = 0; // save the left index number
    let rightIndex = str.length - 1; // save the last index
    while (leftIndex < rightIndex) {
        const temp = str[leftIndex];
        // save the last index value in temp;
        str[leftIndex] = str[rightIndex]; // switch it up
        str[rightIndex] = temp;
        // change indexes
        leftIndex++;
        rightIndex++;
    }
    return str;
};
const str = 'nachiket';
const strChars = str.split("");
reverseString(strChars);
