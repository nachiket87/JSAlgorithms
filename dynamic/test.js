function positiveSum(arr) {
  const s = arr.reduce((sum, item) => {
    return (sum = item > 0 ? (sum += item) : sum);
  }, 0);
  return s;
}
