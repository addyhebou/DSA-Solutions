/* Given a binary tree, design an alorithm 
which creates a linked list of all the nodes at each depth
*/
let lib = require('./utilities');

let treeToLists = (head) => {
  if (head.val == null) return [];
  let q = new lib.Queue();
  let lists = [];
  q.enqueue(head);
  while (!q.isEmpty()) {
    qLen = q.size();
    let depth = [];
    let curr;
    for (let i = 0; i < qLen; i++) {
      let node = q.dequeue();
      let listNode = new lib.SinglyListNode(node.val);
      if (depth.length == 0) {
        depth.push(listNode);
        curr = listNode;
      } else {
        curr.next = listNode;
        curr = curr.next;
      }
      if (node.left) q.enqueue(node.left);
      if (node.right) q.enqueue(node.right);
    }
    lists.push(depth);
  }
  return lists;
};

let a = new lib.TreeNode(4);
let b = new lib.TreeNode(1);
let c = new lib.TreeNode(7);
let d = new lib.TreeNode(2);
let e = new lib.TreeNode(3);
a.left = b;
a.right = c;
c.left = d;
c.right = e;
console.log(treeToLists(a));
