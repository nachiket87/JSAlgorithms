// Counting sort to sorted scores of atheletes based on highst score achievable
var unsortedScores = [37, 89, 41, 65, 91, 53];
var HIGHEST_POSSIBLE_SCORE = 100;
var sortScores = function (unorderedScores, highestPossibleScore) {
    var scoreCounts = new Array(highestPossibleScore + 1).fill(0);
    unorderedScores.forEach(function (score) {
        scoreCounts[score]++;
    });
    var sortedScores = [];
    for (var score = highestPossibleScore; score >= 0; score--) {
        var count = scoreCounts[score];
        for (var time = 0; time < count; time++) {
            sortedScores.push(score);
        }
    }
    return sortedScores;
};
console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
