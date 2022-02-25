let isPalindrome = (head) => {
  let reversed = reverseAndClone(head);
  return isEqual(head, reversed);
};

let reverseAndClone = (node) => {
  let head = null;
  while (node != null) {
    let n = new Node(node.data);
    n.next = head;
    head = n;
    node = node.next;
  }
  return head;
};

let isEqual = (head, reversed) => {
  if (!head && reversed) return false;
  let ptr = head;
  let ptr2 = reversed;
  while (ptr) {
    if (ptr.data != ptr2.data) return false;
    ptr = ptr.next;
    ptr2 = ptr2.next;
  }
  return true;
};
