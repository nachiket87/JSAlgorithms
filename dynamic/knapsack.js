// Knapsack problem. Sterio = {3000, 4 lb}, laptop = {2000, 3lb}, guitar = {1500, 1lb}
// how can you steal maximum worth if you have a knapsack that can carry 4 lbs

let knapsack = 4; // this is the total weight of the knapsack

const items = [
  { name: 'guitar', price: 1500, weight: 1 },
  { name: 'laptop', price: 2000, weight: 3 },
  { name: 'sterio', price: 3000, weight: 4 },
];

// let's make a grid of things

/* 
[...each item that fits] ...  number of mini knapsacks
*/

let a = [];
let b = Array(knapsack).fill(0);
let c = [];

// i is item
// j is weight

for (let i = 0; i < items.length; i++) {
  for (let j = 0; j < knapsack; j++) {
    if (items[i].weight <= j + 1) b[j] = Math.max(b[j], items[i].price);
  }
  a.push(b);
}

console.log(a);
