const factorial = (num) => {
  if (num == 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
};

console.log(factorial(5));

const sumofArray = (arr) => {
  temp = [...arr];
  if (temp.length === 1) {
    return temp.pop();
  } else {
    return temp.pop() + sumofArray(temp);
  }
};

console.log(sumofArray([1, 2, 3, 4, 5]));
