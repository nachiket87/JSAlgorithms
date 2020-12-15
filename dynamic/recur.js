const test = (n) => {
  if (n === 0) {
    return n;
  }

  return n + test(n - 1);
};

console.log(test(5));
