const smallerNumbers = (nums) => {
  let temp = [...nums];
  let ans = nums.fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (temp[i] > temp[j]) {
        ans[i] = ans[i] + 1;
      }
    }
  }
  return ans;
};

console.log(smallerNumbers([8, 1, 2, 2, 3]));
