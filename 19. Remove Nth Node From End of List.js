let removeNthFromEnd = (head, k) => {
  if (!head || (!head.next && k === 1)) return null;
  let dummy = new ListNode('D', head);
  let start = dummy;
  let end = dummy;

  // set up distances
  for (let i = 0; i < k + 1; i++) {
    end = end.next;
  }

  while (end) {
    end = end.next;
    start = start.next;
  }
  start.next = start.next.next;
  return dummy.next;
};
