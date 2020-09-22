"use strict";
// simple reversal of string
const str = "nachiket";
const words = str.split("");
// split into array of chars and join back into a reversed string;
const answer = words.reverse().join("").toString();
console.log(answer);
