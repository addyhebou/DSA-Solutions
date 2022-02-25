let isBST = (node) => {
  if (!node.left && !node.right) return node.val;
  if (node.right) {
    if (node.left) {
      let l = isBST(node.left) < node.val;
      let r = node.val < isBST(node.right);
      return l && r;
    }
    return node.val < isBST(node.right);
  }
  return isBST(node.left) < node.val;
};

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);

two.left = one;
two.right = four;
four.left = three;

console.log(isBST(two));
