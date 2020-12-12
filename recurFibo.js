const outerFibo = () => {
  const memo = {};
  const fibo = (n) => {
    if (n === 0) {
      return 0;
    }
    if (n <= 2 && n > 0) {
      return 1;
    }
    if (memo[n]) return memo[n];
    const result = fibo(n - 1) + fibo(n - 2);
    memo[n] = result;
    return result;
  };
  return fibo;
};

const n = outerFibo();

console.log(n(6));

// 0,1,1,2,3,5,8,13,21
// 0,1,2,3,4,5,6,7,8
