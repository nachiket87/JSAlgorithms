function SeriesSum(n) {
  var i = 1;
  var d = 1;
  var sum = 0;
  while (i <= n) {
    sum = sum + 1 / d;
    d = d + 3;
    i++;
  }
  const answer = Math.round((sum + Number.EPSILON) * 100) / 100;
  const a1 = answer.toString();

  switch (a1.length) {
    case 1:
      return a1 + '.00';
      break;
    case 2:
      return a1 + '0';
      break;
    default:
      return a1;
      break;
  }
}

console.log(SeriesSum(1));
