const graph2 = {
  start: { A: 5, B: 2 },
  A: { C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, finish: 3 },
  D: { finish: 1 },
  finish: {},
};
const graph = {
  start: { A: 6, B: 2 },
  A: { finish: 1 },
  B: { A: 3, finish: 5 },
  finish: {},
};

// need to find the 'cheapest' node for Djikstra's

let distanceFromStart = graph.start;
let allNodes = Object.keys(graph);

for (let i = 1; i < allNodes.length; i++) {
  let currentNode = graph[allNodes[i]];
  let currentNodeBranches = Object.keys(currentNode);
  let currentNodeDistance = distanceFromStart[allNodes[i]] || 0;
  currentNodeBranches.forEach((key) => {
    if (
      distanceFromStart[key] &&
      distanceFromStart[key] > currentNode[key] + currentNodeDistance
    ) {
      distanceFromStart[key] = currentNode[key] + currentNodeDistance;
    } else if (!distanceFromStart[key]) {
      distanceFromStart[key] = currentNodeDistance + currentNode[key];
    }
  });
}
console.log(distanceFromStart);

// check neighbords of start -> A: 5 , B: 2

// Cheapest node is B then check B

// B neighors are A and D

// update distances. A is still cheapest from start with 5 and D is now available via b with 7

// B is done so now check A

// D is 2 steps from A so it's tied for same distance from A as from B

// C is unlocked with 9 from A.

// now Check D. D to C is 6 and is available cheaper via D and F is now open with
