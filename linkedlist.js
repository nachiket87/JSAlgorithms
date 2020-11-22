class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const a = new LinkedListNode('a');
const b = new LinkedListNode('b');
a.next = b;
const c = new LinkedListNode('c');
b.next = c;
const d = new LinkedListNode('d');
c.next = d;

// a -> b -> c -> d
// d -> c -> b -> a

const reverLinkedList = (head) => {
  let currentNode = head;
  let prevNode = null;
  let nextNode = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  return prevNode;
};

console.log(reverLinkedList(a));
