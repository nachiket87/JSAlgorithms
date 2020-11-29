class Node {
  constructor(value) {
    this.value = value;
    this.connections = [];
  }
}

const a = new Node('start');
const b = new Node('b');
const c = new Node('c');
a.connections.push(b);
a.connections.push(c);
//x = new Node('finish');
//c.connections.push(x);

let current = a;
let visited = [];
let toVisit = [];
let i = 0;
while (current.value !== 'finish') {
  visited.push(current);
  toVisit = [...current.connections];
  current = toVisit[0] ? toVisit[0] : c;
  toVisit.splice(1, toVisit.length - 1);
  i++;
}

const graph = {};
graph['you'] = ['alice', 'claire', 'bob'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

console.log(finalArr);
