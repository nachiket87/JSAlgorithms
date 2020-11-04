const checkifExist = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] * 2 === arr[j] && i !== j) {
        return true;
      }
    }
  }
  return false;
};

console.log(checkifExist([10, 2, 5, 3]));
