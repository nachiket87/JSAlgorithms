// incomplete

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }
  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

const topBranch = new BinaryTreeNode(5);
topBranch.insertLeft(4);
topBranch.insertRight(6);

const leftBranch = topBranch.left;
const rightBranch = topBranch.right;

rightBranch.insertRight(1);
rightBranch.insertLeft(100);

let arrayofBranches = [topBranch];
let answer = [];

const checkLeaf = (node) => {
  if (!node.left && !node.right) {
    return true;
  }
  return false;
};

const checkEachSide = (tree) => {
  if (tree.left.value < tree.value && tree.right.value > tree.value) {
    return true;
  }
  return false;
};

while (arrayofBranches.length > 0) {
  let currentNode = arrayofBranches.pop();
  if (checkLeaf(currentNode)) {
    console.log('Found a leaf!');
  } else {
    answer.push(checkEachSide(currentNode));
    if (currentNode.left) {
      arrayofBranches.push(currentNode.left);
    }
    if (currentNode.right) {
      arrayofBranches.push(currentNode.right);
    }
  }
}

console.log(answer);
