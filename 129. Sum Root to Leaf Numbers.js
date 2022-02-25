let sumNumbers = (root) => {
  let dfs = (root, curr) => {
    if (!root) return 0;
    curr = curr * 10 + root.val;
    if (!root.left && !root.right) return curr;
    let leftSum = dfs(root.left, curr);
    let rightSum = dfs(root.right, curr);
    return leftSum + rightSum;
  };
  return dfs(root, 0);
};

let lib = require('./utilities.js');
let four = new lib.TreeNode(4);
four.left = new lib.TreeNode(9);
four.right = new lib.TreeNode(0);
four.left.left = new lib.TreeNode(5);
four.left.right = new lib.TreeNode(1);
console.log(sumNumbers(four));
