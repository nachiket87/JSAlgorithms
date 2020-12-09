const fibo = (n) => {
  let a = 1;
  let b = 0;
  let temp = 1;
  while (n >= 0) {
    console.log(b);
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }
  // 0 , 1 , 1 , 2, 3, 5, 8
};

console.log(fibo(10));
