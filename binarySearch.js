// changes
const binarySearch = (target, nums) => {
  let floor = -1;
  let ceiling = nums.length;

  while (floor + 1 < ceiling) {
    const distance = ceiling - floor;
    const halfdistance = Math.floor(distance / 2);
    const guessIndex = floor + halfdistance;
    const guessValue = nums[guessIndex];
    if (guessValue === target) {
      return true;
    }
    if (guessValue > target) {
      ceiling = guessIndex;
    } else {
      floor = guessIndex;
    }
  }
  return false;
};

module.exports = binarySearch;
