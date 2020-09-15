var reverseString = function (str) {
    var leftIndex = 0;
    var rightIndex = str.length - 1;
    while (leftIndex < rightIndex) {
        var temp = str[leftIndex];
        // save the current index in temp;
        str[leftIndex] = str[rightIndex];
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
