// Knapsack problem. Sterio = {3000, 4 lb}, laptop = {2000, 3lb}, guitar = {1500, 1lb}
// how can you steal maximum worth if you have a knapsack that can carry 4 lbs

const [values, weights, maxWeightConstraint] = [
  [3000, 2000, 1500],
  [4, 3, 1],
  5,
];

const knapsack = (values, weights, maxWeightConstraint) => {
  return knapsackHelper(values, weights, maxWeightConstraint, values.length);
};

const knapsackHelper = (values, weights, maxWeightConstraint, totalItems) => {
  if (totalItems == 0 || maxWeightConstraint === 0) {
    return 0;
  }

  const currentItemIndex = totalItems - 1;
  if (weights[currentItemIndex] > maxWeightConstraint) {
    return knapsackHelper(values, weights, maxWeightConstraint, totalItems - 1);
  }

  const withItem =
    values[currentItemIndex] +
    knapsackHelper(
      values,
      weights,
      maxWeightConstraint - weights[currentItemIndex],
      totalItems - 1
    );
  const withoutItem = knapsackHelper(
    values,
    weights,
    maxWeightConstraint,
    totalItems - 1
  );

  return Math.max(withItem, withoutItem);
};

console.log(knapsack(values, weights, maxWeightConstraint));
