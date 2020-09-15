// reverseWords should print 'steal pound cake'
var reverseWords = function (message) {
    var temp = message.join("");
    var answer = temp.split(" ").reverse();
    console.log(answer.join(" ")); // hard coded answer perhaps there's a better way to do this.
};
var message = ['c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l'];
reverseWords(message);
