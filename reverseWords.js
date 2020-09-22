"use strict";
// reverseWords should print 'steal pound cake'
const reverseWords = (message) => {
    const temp = message.join("");
    const answer = temp.split(" ").reverse();
    console.log(answer.join(" ")); // hard coded answer perhaps there's a better way to do this.
};
const message = ['c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l'];
reverseWords(message);
