// Iteratively
/* 
let reverseList = (head) => {
    let prev = null;
    let curr = head;
    let next = curr.next;
    
    while (next != null) {
        curr.next = prev;
        prev = curr;
        curr = next;
        next = curr.next;
    }
    curr.next = prev;
    return prev;
};
// Recursively
let reverseList = (head) => {
    if (head == null) return null;
    let newHead = head;
    if (head.next != null) {
        newHead = reverseList(head.next); // gets the value of the head of the reversed list
        head.next.next = head; // This is the reversing line; break the exiting link to flip it
        // evaluate the first node, which is head.next. Then that node's.next now points to head
        // 1 -> 2
        // head = 1
        // head.next = 2
        // head.next.next = 2
        // after running this line, head.next.next gets the value of head
        // 2.next = 1
        // 2 -> 1
    }
    head.next = null;
    return newHead;
};

// Steps for recursive:
1) Check for null head passed in
2) Create a newhead pointer that will keep going through and find the head of a subproblem
3) Base case: if the subproblem is one node, have it point to null and return it (newhead)
4) else: set the newHead to equal the subproblem
5) then BREAK THE LINK: by having that node's next.next set to itself
    -> node.next accesses the current forward link of that node's next (before it's reversed)
    -> declaring for its.next to be itself is now having that nextNode point to its previous
6) set the original head (labeled head) to now be the tail by pointing it to null
7) return the newHead
*/

function reverse(headNode) {
  // (1) If passed in is null
  if (!headNode) return null;
  // (2) Iterate with two pointers - prev odd node, next odd node
  let prevOddNode = headNode;
  let nextOddNode = prevOddNode.next;
  // (3) Check if nextNode is even to begin reverse subproblem
  while (nextOddNode != null) {
    if (nextOddNode.data % 2 == 0) {
      // (4) Place nextOddNode to the odd node after the subproblem
      while (nextOddNode && nextOddNode.data % 2 == 0) {
        nextOddNode = nextOddNode.next;
      }
      // (5) set the prevNode.next to the subproblem
      prevOddNode.next = reverseListHelper(prevOddNode.next, nextOddNode);
      prevOddNode = nextOddNode;
      if (prevOddNode) nextOddNode = prevOddNode.next;
    } else {
      prevOddNode = prevOddNode.next;
      nextOddNode = nextOddNode.next;
    }
  }
  return headNode;
}

function reverseListHelper(headNode, tailOddNode) {
  let currNode = headNode;
  let prevNode = null;
  let nextNode = currNode.next;
  let tailEvenNode = headNode;

  while (nextNode != tailOddNode) {
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
    nextNode = nextNode.next;
  }
  currNode.next = prevNode;
  tailEvenNode.next = tailOddNode;
  return currNode;
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let prnt = (headNode) => {
  while (headNode != null) {
    process.stdout.write(headNode.data + ' -> ');
    headNode = headNode.next;
  }
};
let a = new Node(1);
let b = new Node(2);
let c = new Node(4);
let d = new Node(7);
let e = new Node(8);
let f = new Node(10);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

function createLinkedList(arr) {
  var head = null;
  var tempHead = head;
  for (var v of arr) {
    if (head == null) {
      head = new Node(v);
      tempHead = head;
    } else {
      head.next = new Node(v);
      head = head.next;
    }
  }
  return tempHead;
}

var head_2 = createLinkedList([2, 18, 24, 3, 5, 7, 9, 6, 12]);
reverse(head_2);

prnt(head_2);
