let lib = require('./utilities.js');
let deleteMidNode = (head) => {
  if (!head || !head.next) return null;
  let slow = head;
  let fast = head;
  let prev;

  while (fast && fast.next) {
    fast = fast.next.next;
    if (!fast || !fast.next) prev = slow;
    slow = slow.next;
  }
  deleteNode(prev, slow);
  return head;
};

let deleteNode = (prev, node) => {
  let next = node.next;
  prev.next = next;
  node.next = null;
};

let lst = ['a', 'b', 'c', 'd', 'e', 'f'];
let head = lib.createLinkedList(lst);
deleteMidNode(head);
lib.printLinkedList(head);

// 1 -> null
