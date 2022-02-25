var sortedListToBST = function (head) {
  // 1) Find the middle value to initialize a new Root
  // 2) Set that new Root's left to process the left side
  // 3) Set that new Root's right to process the right side
  // 4) Return that root

  if (!head) return null;

  let helper = (head, end) => {
    if (head === end) return null;
    let mid = getMid(head, end);
    let newRoot = new lib.TreeNode(mid.val);
    newRoot.left = helper(head, mid);
    newRoot.right = helper(mid.next, end);
    return newRoot;
  };
  return helper(head, null);
};

let getMid = (head, end) => {
  let fast = head;
  let slow = head;
  while (fast != end && fast.next != end) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

let lib = require('./utilities.js');
let ten = new lib.SinglyListNode(-10);
ten.next = new lib.SinglyListNode(-3);
ten.next.next = new lib.SinglyListNode(0);
ten.next.next.next = new lib.SinglyListNode(5);
ten.next.next.next.next = new lib.SinglyListNode(9);
let zero = new lib.SinglyListNode(0);
console.log(sortedListToBST(zero));
