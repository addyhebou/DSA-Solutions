let lib = require('./utilities.js');
let checkBalanced = (root) => {
  let dfs = (root) => {
    /*
        for a tree to be balanced:
        a) both subtrees have to be balanced or have the balanced bool be true
        b) the height difference between both trees <= 1
        */
    if (!root) return [true, 0];
    let left = dfs(root.left);
    let right = dfs(root.right);
    let ifBalanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
    let newHeight = Math.max(left[1], right[1]) + 1;
    return [ifBalanced, newHeight];
  };
  return dfs(root);
};

let a = new lib.TreeNode(4);
let b = new lib.TreeNode(1);
let c = new lib.TreeNode(7);
let d = new lib.TreeNode(2);
let e = new lib.TreeNode(3);
let f = new lib.TreeNode(10);
a.left = b;
a.right = c;
c.left = d;
c.right = e;
d.left = f;
console.log(checkBalanced(a));
