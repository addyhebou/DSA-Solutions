class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

let constructBST = (lst) => {
  let helper = (left, right) => {
    let mid = Math.floor((left + right) / 2);
    let root = new Node(mid);
    root.left = helper(left, mid - 1);
    root.right = helper(mid + 1, right);
    return root;
  };
  return helper(0, lst.length - 1);
};
