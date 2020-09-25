// Counting sort to sorted scores of atheletes based on highst score achievable

const unsortedScores: number[] = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE: number = 100;

const sortScores = (unorderedScores: number[], highestPossibleScore: number) => {

  const scoreCounts: number[] = new Array(highestPossibleScore + 1).fill(0);

  unorderedScores.forEach(score => {
    scoreCounts[score]++;
  });

  const sortedScores = [];

  for (let score = highestPossibleScore; score >= 0; score--) {
    const count = scoreCounts[score];

    for (let time = 0; time < count; time++) {
      sortedScores.push(score);
    }
  }

  return sortedScores;
}
console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
