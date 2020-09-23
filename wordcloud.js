var st = "After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.";
var arrofSt = st.split(" ");
var setOfSt = new Set(st.split(" "));
var testAnswer = new Map();
arrofSt.forEach(function (word) {
    if (testAnswer.has(word)) {
        testAnswer.set(word, testAnswer.get(word) + 1);
    }
    else {
        testAnswer.set(word, 1);
    }
});
console.log(testAnswer);
