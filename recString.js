/* Write a recursive function for generating all permutations of an input string. Return them as a set. */
/* 

1) try a small case like 'cats'
2) how can we get all permutations of 'cats'?
3) answer is 'cats', 'stac', acts', 'tacs' etc..




const stringPerms = () => {
  const answer = new Set();
  const innerFun = (str) => {
    if (answer.has(str)) {
      return answer;
    }
    answer.add(str);
    str = str.split('');
    // now we need to switch first char in every position;
    let currentIndex = 0;
    let addStr = '';
    for (let i = 1; i < str.length; i++) {
      tempChar = str[i]; // char to be replaced
      str[i] = str[currentIndex];
      str[currentIndex] = tempChar;
      currentIndex++;
      addStr = str.join('');
      answer.add(addStr);
    }
    return innerFun(addStr);
  };
  return innerFun;
};

const a = stringPerms();
console.log(a('cats'));
*/

const getPermutations = (string) => {
  // Base case
  if (string.length <= 1) {
    return new Set([string]);
  }

  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  // Recursive call: get all possible permutations for all chars except last
  const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);
  const permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach(
    (permutationOfAllCharsExceptLast) => {
      for (
        let position = 0;
        position <= allCharsExceptLast.length;
        position++
      ) {
        const permutation =
          permutationOfAllCharsExceptLast.slice(0, position) +
          lastChar +
          permutationOfAllCharsExceptLast.slice(position);
        permutations.add(permutation);
      }
    }
  );

  return permutations;
};

console.log(getPermutations('cats'));
