class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

const a = new GraphNode('a');
const b = new GraphNode('b');
const c = new GraphNode('c');

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

/* a->b->c
c->b->a */

const graph = [a, b, c];

graph.forEach((node) => {
  const illegalColors = new Set();

  node.neighbors.forEach((neighbor) => {
    if (neighbor.color !== null) {
      illegalColors.add(neighbor.color);
    }
  });
  const colors = ['red', 'blue', 'green', 'orange'];

  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    if (!illegalColors.has(color)) {
      node.color = color;
      break;
    }
  }
});

console.log(a.color);
console.log(b.color);
console.log(c.color);
