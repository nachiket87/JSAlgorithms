// Knapsack problem. Sterio = {3000, 4 lb}, laptop = {2000, 3lb}, guitar = {1500, 1lb}
// how can you steal maximum worth if you have a knapsack that can carry 4 lbs

let knapsack = 4; // this is the total weight of the knapsack

const items = [
  { name: 'sterio', price: 3000, weight: 4 },
  { name: 'laptop', price: 2000, weight: 3 },
  { name: 'guitar', price: 1500, weight: 1 },
];
const what = [0];

const function_name = () => {
  const arr = [];
  const checkifFits = (item, knapsack) => {
    if (knapsack < item.weight) {
      return [arr, { weightleft: knapsack }];
    }
    if (item.weight <= knapsack) {
      arr.push([item.name, item.price]);
      return checkifFits(item, knapsack - item.weight);
    }
  };
  return checkifFits;
};

const x = function_name();

console.log(x(items[0], 4));

for (item of items) {
  console.log(x(item, knapsack));
}
