const fibo = (n) => {
  let a = 1;
  let b = 0;
  let temp = 0;

  while (n >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }
  return b;
};

console.log(fibo(2));
