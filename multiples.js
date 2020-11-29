function solution(number) {
  if (number < 0) return 0;
  let sum = 0;
  let count = 0;
  while (count < number) {
    if (count % 3 === 0 || count % 5 === 0) sum = sum + count;
    count++;
  }

  return sum;
}

function descendingOrder(n) {
  let a = [];
  while (n > 0) {
    a.push(n % 10);
    n = Math.floor(n / 10);
  }
  let tempAnswer = a.sort((x, y) => {
    return y - x;
  });

  return parseInt(tempAnswer.join(''));
}

function validatePIN(pin) {
  //return true or false
  if (pin.length === 4 || pin.length === 6) {
    let reg = RegExp(/^\d+$/);
    return reg.test(pin);
  }
  return false;
}

function sortArray(array) {
  let tempArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      tempArray.push(array[i]);
      array[i] = '*';
    }
  }
  tempArray = tempArray.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '*') {
      array[i] = tempArray.pop();
    }
  }
  return array;
}

console.log(sortArray([1, 3, 2, 8, 5, 4, 11])); // [1, 3, 2, 8, 5, 4]
