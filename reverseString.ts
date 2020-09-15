// simple reversal of string

const str: string = "nachiket"

const words: Array<string> = str.split("");

// split into array of chars and join back into a reversed string;

const answer: string = words.reverse().join("").toString();

console.log(answer);
