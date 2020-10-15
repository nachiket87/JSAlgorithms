const rotationPoint = (words) => {
  let guessIndex = Math.floor((words.length + 1) / 2);
  let nextIndex = guessIndex + 1;
  let firstIndex = 0;
  let lastIndex = words.length - 1;

  while (firstIndex < lastIndex) {
    if (words[guessIndex][0] <= words[nextIndex][0]) {
      // we found one!
      lastIndex = nextIndex;
      nextIndex = guessIndex;
      guessIndex--;
      if (!guessIndex) {
        return words[nextIndex];
      }
      if (words[guessIndex][0] > words[nextIndex][0]) {
        // check if the previous one is also alphabetical
        return words[nextIndex];
      }
    } else {
      firstIndex = guessIndex;
      guessIndex = firstIndex + Math.floor((lastIndex - firstIndex) / 2);
      nextIndex = guessIndex + 1;
    }
  }
};

const words2 = [
  "ptolemaic",
  "retrograde",
  "supplant",
  "undulate",
  "xenoepist",
  "asymptote", // <-- rotates here!
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage",
];

const words = [
  "kanika",
  "lando",
  "manasi",
  "nachiket",
  "ptolemaic",
  "retrograde",
  "supplant",
  "undulate",
  "xenoepist",
  "asymptote", // <-- rotates here!
  "babka",
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage",
];

console.log(rotationPoint(words));
console.log(rotationPoint(words2));
module.exports = rotationPoint;
