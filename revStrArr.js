const str = 'I am a Javascript developer';

let answer = str.split(' ');

let answer2 = answer.map((str) => {
  return str.split('').reverse().join('');
});

const TEST = ['I', 'H', 'C', 'A', 'N'];

const splitter = (arrofChars) => {
  let leftIndex = 0;
  let rightIndex = arrofChars.length - 1;

  while (leftIndex < rightIndex) {
    const tempArr = arrofChars[leftIndex];
    arrofChars[leftIndex] = arrofChars[rightIndex];
    arrofChars[rightIndex] = tempArr;
    leftIndex += 1;
    rightIndex -= 1;
  }
  return arrofChars;
};
