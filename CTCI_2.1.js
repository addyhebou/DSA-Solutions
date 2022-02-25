let remove_dups = (head) => {
  if (head == null) return null;
  if (head.next == null) return head;
  let hashMap = {};
  let index = 0;
  let ptr = head;
  while (ptr != null) {
    let key = ptr.data;
    if (!hashMap.hasOwnProperty(key)) hashMap[key] = index;
    else removeNode(ptr);
    ptr = ptr.next;
    index += 1;
  }
  return head;
};

let removeNode = (node) => {
  if (node == null) return;
  let prevNode = node.prev;
  let nextNode = node.next;
  if (prevNode != null) prevNode.next = nextNode;
  if (nextNode != null) nextNode.prev = prevNode;
};

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

let node1 = new Node(7);
let node2 = new Node(2);
let node3 = new Node(7);
let node4 = new Node(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node2.prev = node1;
node3.prev = node2;
node4.prev = node3;

let prnt = (headNode) => {
  while (headNode != null) {
    process.stdout.write(headNode.data + ' -> ');
    headNode = headNode.next;
  }
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

var head_2 = createLinkedList([7, 14, 37, 7, 5, 14, 3, 42, 37, 56, 1]);

let headNode = remove_dups(node1);
prnt(headNode);
