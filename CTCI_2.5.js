let sumLists = (h1, h2) => {
  if (!h1 && !h2) return 0;
  if (!h1) return h2;
  if (!h2) return h1;
  let top = h1;
  let bottom = h2;
  let newHead = null;
  let iter = newHead;
  while (top && bottom) {
    let node = new SinglyListNode(((top.val + bottom.val) % 10) + carry);
    let carry = top.val + bottom.val > 10 ? 1 : 0;
    if (!newHead) {
      newHead = node;
      iter = newHead;
    } else iter = node;
    iter = iter.next;
    top = top.next;
    bottom = bottom.next;
  }
  if (!bottom) iter.next = top;
  else if (!top) iter.next = bottom;
  return newHead;
};
