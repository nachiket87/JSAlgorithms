const shuff = (nums, n) => {
  let totalLength = n * 2;
  let oddNum = true;
  let arr = [];
  let counter = 0;
  let secondCounter = n;
  for (i = 0; i < totalLength; i++) {
    if (oddNum) {
      arr.push(nums[counter]);
      counter++;
    } else {
      arr.push(nums[secondCounter]);
      secondCounter++;
    }
    oddNum = !oddNum;
  }
  return arr;
};

const nums = [1, 2, 3, 4, 4, 3, 2, 1];
const n = 4;

console.log(shuff(nums, n));
