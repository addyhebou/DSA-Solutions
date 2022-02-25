let equal = (node) => {
  let count = 0;
  let helper = (node) => {
    if (!node) return 0;
    count += node.val === helper(node.left) + helper(node.right);
    return node.val + helper(node.left) + helper(node.right);
  };
  helper(node);
  return count;
};

// let equal2 = (node) => {
//   let helper = (node, count) => {
//     if (!node) return [0, count];
//     let left = helper(node.left);
//     let right = helper(node.right);
//     count += node.val === left[0] + right[0];
//     return [node.val + left[0] + right[0], left[1] + right[1]];
//   };
//   return helper(node, 0)[1];
// };

let lib = require('./utilities.js');
let three = new lib.TreeNode(3);
let one = new lib.TreeNode(1);
let two = new lib.TreeNode(2);
let four = new lib.TreeNode(4);
let ten = new lib.TreeNode(10);
let twotwo = new lib.TreeNode(2);

ten.left = three;
ten.right = four;
three.left = two;
three.right = one;

// two.left = three;
// three.left = twotwo;

console.log(equal(ten));
