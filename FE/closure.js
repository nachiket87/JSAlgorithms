const square = (num) => {
  return num * num;
};

const memoFunc = () => {
  const cache = {};
  console.log(cache);
  return function square(num) {
    if (num in cache) {
      console.log('returning from cache');
      return cache[num];
    } else {
      console.log('returning from calculations');
      cache[num] = num * num;
      return cache[num];
    }
  };
};

const x = memoFunc();

console.log(x(5));
console.log(x(5));
console.log(x(6));
