// simple reversal of string
var str = "nachiket";
var words = str.split("");
// split into array of chars and join back into a reversed string;
var answer = words.reverse().join("").toString();
console.log(answer);
