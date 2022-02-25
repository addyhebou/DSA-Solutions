var hasCycle = function (head) {
  if (!head) return false;

  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
};

(function () {
  let lib = require('./utilities.js');
  let head = lib.createLinkedList([1, 2, 3, 4]);
  head.next.next.next.next = head.next;
  console.log(hasCycle(head));
})();
