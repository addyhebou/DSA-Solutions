var reverseBetween = function (head, left, right) {
  let iter = head;
  while (iter.next) {
    if (iter.next.val == left) iter.next = reverseLst(iter.next, right);
    iter = iter.next;
  }
  return head;
};
class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}
let reverseLst = (head, endVal) => {
  let prev = null;
  let curr = head;
  let next = curr.next;

  while (curr.next && curr.val != endVal) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = curr.next;
  }
  head.next = next;
  curr.next = prev;
  return curr;
};

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

let prnt = (headNode) => {
  while (headNode != null) {
    process.stdout.write(headNode.val + ' -> ');
    headNode = headNode.next;
  }
};

let head = createLinkedList([1, 2, 3, 4, 5]);
reverseBetween(head);
prnt(head);
