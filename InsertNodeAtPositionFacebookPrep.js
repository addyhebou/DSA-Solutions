let insertNodeAtPosition = (llist, data, position) => {
  // Write your code here
  if (!llist) return null;
  let pos = 0;
  let curr = llist;
  let node = new SinglyLinkedListNode(data);
  while (curr.next) {
    if (pos == position - 1) {
      let next = curr.next;
      curr.next = node;
      node.next = next;
      break;
    }
    pos += 1;
    curr = curr.next;
  }
  if (pos + 1 == position) curr.next = node;

  return llist;
};
