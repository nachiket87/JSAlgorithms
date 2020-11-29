function arrayDiff(a, b) {
  return a.filter((item) => {
    return !b.includes(item);
  });
}

console.log(arrayDiff([12, 16, -1, -7, -17, 5], [5, 12, 16])); // [ -1, -7, -17]
