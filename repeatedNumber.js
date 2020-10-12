const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2];

const checkRepeat = (x) => {
  answer = 0;
  x.forEach((item, ind) => {
    for (let b = x.length - 1; b > ind; b--) {
      if (item === x[b]) {
        answer = item;
        return item;
      }
    }
  });
  return answer;
};
console.log(checkRepeat(x));
