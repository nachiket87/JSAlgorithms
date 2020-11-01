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

const isBinaryBalance = (treeRoot) => {
  const nodeAndBoundStack = [];
  nodeAndBoundStack.push({
    node: treeRoot,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY,
  });

  while (nodeAndBoundStack.length) {
    const { node, lower, upper } = nodeAndBoundStack.pop();

    if (node.value < lower || node.value > upper) {
      return false;
    }

    if (node.left) {
      nodeAndBoundStack.push({
        node: node.left,
        lowerBound,
        upperBound: node.value,
      });
    }
    if (node.right) {
      nodeAndBoundStack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound,
      });
    }
  }
  return true;
};
