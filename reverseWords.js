// reverseWords should print 'steal pound cake'
var reverseWords = function (message) {
    var temp = message.join("");
    var yes = temp.split(" ").reverse();
    console.log(yes.join(" "));
};
var message = ['c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l'];
reverseWords(message);
