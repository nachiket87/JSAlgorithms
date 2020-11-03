// it's a binary search tree so left node is always smaller than value and right node is always larger
class BinaryNodeTree {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }

  insertRight(value) {
    this.right = new BinaryNodeTree(value);
    return this.right;
  }
  insertLeft(value) {
    this.left = new BinaryNodeTree(value);
    return this.left;
  }
}

const findLeaf = (node) => {
  if (!node.right) {
    return true;
  }
  return false;
};

const findLargest = (node) => {
  let v = findLeaf(n);
  while (!v) {
    v = findLeaf(node.right);
    if (v) {
      let largest = node.right.value;
      return [largest, node];
    }
    node = node.right;
  }
};

n = new BinaryNodeTree(10);
n.insertRight(100);

x = n.right;
x.insertRight(200);

y = x.right;
y.insertRight(300);
y.insertLeft(110);

z = y.left;
z.insertRight(250);

const [largest, node] = findLargest(n);
let secondLargest = node.value;

if (node.left) {
  secondLargest = findLargest(node.left)[0];
}
console.log(secondLargest);
