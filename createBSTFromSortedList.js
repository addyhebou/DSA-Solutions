let lib = require('./utilities');

let createBST = (nums) => {
  let dfs = (low, high) => {
    if (low > high) return null;
    let mid = Math.floor(low + high / 2);
    let root = new lib.TreeNode(nums[mid]);
    root.left = dfs(low, mid - 1);
    root.right = dfs(mid + 1, high);
    return root;
  };
  return dfs(0, nums.length - 1);
};

let lst = [1, 2, 3, 4, 5, 6, 7];
console.log(createBST(lst));

/*

BST - where the left node is less than root, right node is more than root

[1,2,3,4,5,6,7]
        4
      


USE BINARY SEARCH
Take the middle node as root
process left side, process rightside

BASE CASE: [1] left < right, return null
set null values for leaf nodes

*/
