const stockPrices = [10, 7, 5, 8, 11, 9];

/* const MaxProfit = (stockPrices) => {
  let maxProf = 0;
  for (i = 0; i < stockPrices.length - 1; i++) {
    for (j = i + 1; j < stockPrices.length; j++) {
      if (stockPrices[j] - stockPrices[i] > maxProf) {
        maxProf = stockPrices[j] - stockPrices[i];
      }
    }
  }

  return maxProf;
}; */
// ^^ suboptimal solution

const MaxProfit = (stockPrices) => {
  let minPrice = stockPrices[0];
  let maxProf = stockPrices[1] - stockPrices[0];

  for (let i = 0; i < stockPrices.length - 1; i++) {
    const currentPrice = stockPrices[i];

    const potentialProfit = currentPrice - minPrice;

    maxProf = Math.max(potentialProfit, maxProf);
    minPrice = Math.min(currentPrice, minPrice);
  }
  return maxProf;
};
console.log(MaxProfit(stockPrices));
