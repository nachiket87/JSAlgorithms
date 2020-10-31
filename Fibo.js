const fibo = (N) => {
  let a = 1;
  let b = 0;
  let temp = 0;

  while (N >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    N--;
  }
  return b;
};

console.log(fibo(2));
