array1 = [1, 2, 3, 4, 5, 6, 7];
array2 = [99, 18, 25];

// 3, 4, 5, 6, 7, 8
const check = (array1, array2) => {
  for (let i = 0; i < array1.length - 1; i++) {
    for (let j = i + 1; j < array1.length; j++) {
      if (array2.includes(array1[i] + array1[j])) return true;
    }
  }
  return false;
};

console.log(check(array1, array2));
