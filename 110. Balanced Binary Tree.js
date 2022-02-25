let lib = require('./utilities');
let isBalanced = (root) => {
  let dfs = (root) => {
    if (!root) return [true, 0]; // [ifBalanced, height]
    let left = dfs(root.left);
    let right = dfs(root.right);
    /* two cases for balanced trees
        1) if both subtrees are balanced
        2) if the height difference between both trees <= 1
        */
    let ifBalanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
    let newHeight = Math.max(left[1], right[1]) + 1;
    return [ifBalanced, newHeight];
  };
  return dfs(root)[0];
};
let g = new lib.TreeNode();
let h = new lib.TreeNode();
let a = new lib.TreeNode();
let b = new lib.TreeNode();
let c = new lib.TreeNode();
g.left = a;
g.right = h;
a.left = b;
a.right = c;

console.log(g);
