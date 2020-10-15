const rotationPoint = (words) => {
  let wordsLength = words.length;
  let startIndex = Math.floor(wordsLength / 2);
  let indexBefore = startIndex - 1;

  while (true) {
    if (words[startIndex][0] <= words[indexBefore][0]) {
      wordsLength = startIndex;
      if (words[startIndex - 1][0] > words[startIndex][0]) {
        return startIndex;
      } else {
        startIndex -= 1;
      }
    } else {
      wordsLength = startIndex;
      startIndex = Math.floor(wordsLength / 2);
      indexBefore = startIndex - 1;
    }
  }
};

module.exports = rotationPoint;

const words = [
  "retrograde",
  "retrograde",
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
  "zenoepist",
];

console.log(rotationPoint(words));
