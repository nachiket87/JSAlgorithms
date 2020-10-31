class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
  }
  insertRight(value) {
    this.right = new BinaryTreeNode(value);
  }
}
const a = new BinaryTreeNode(5);

a.insertRight(4);
a.insertLeft(4);

const b = a.left;

b.insertLeft(3);
b.insertRight(3);

// need to check both right and left of each node.
// go till both right and left and null

let temp = a;
let stopCount = false;
let count = 0;

const finalAnswer = (aaa) => {
  const nextBranch = (x) => {
    return [x.left, x.right];
  };

  let COUNT = 0;

  function checkCount(x) {
    COUNT++;
    let [leftSide, rightSide] = nextBranch(x);
    if (!leftSide && !rightSide) {
      return 1;
    }
    checkCount(leftSide);
    checkCount(rightSide);
  }

  checkCount(aaa);
  return COUNT;
};

console.log(finalAnswer(temp.right));
console.log(finalAnswer(temp.left));

console.log(temp);
