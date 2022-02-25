let lib = require('./utilities.js');
let isBST = (node) => {
  let isBSTHelper = (node, min, max) => {
    if (node == null) return true;
    if (node.val < min || node.val > max) return false;
    let left = isBSTHelper(node.left, min, node.val);
    let right = isBSTHelper(node.right, node.val, max);
    return left && right;
  };
  return isBSTHelper(node, -Infinity, Infinity);
};

let root;
root = new lib.TreeNode(3);
root.left = new lib.TreeNode(2);
root.right = new lib.TreeNode(5);
root.left.left = new lib.TreeNode(1);
root.left.right = new lib.TreeNode(4);
console.log(isBST(root));
/*


            5
    3               8
1       4       6       9

            5
    3               8
1               9      


            5
    4
1       9



1) if node is null -> return [True (valid BST), value]
2) if 





*/
