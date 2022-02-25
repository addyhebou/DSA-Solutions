/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 
 key: 5
 

    5
                    10
                9         18
        6                  
            
            
minRoot: node(6)
rightRoot: node(7)

6
      10
     9  18
   6    
    7
 
 */
var deleteNode = function (root, key) {
  if (!root) return null;
  if (root.val === key) {
    if (!root.left && !root.right) return null;
    if (!root.right) return root.left;
    if (!root.left) return root.right;
    else {
      let minRoot = findMinRoot(root.right);
      let rightRoot = minRoot.right;
      replaceMin(root.right, rightRoot, minRoot.val);
      minRoot.left = root.left;
      minRoot.right = root.right;
    }
  } else if (root.val > key) root.left = deleteNode(root.left, key);
  else root.right = deleteNode(root.right, key);
  return root;
};

let findMinRoot = (root) => {
  return !root.left ? root : findMinRoot(root.left);
};

let replaceMin = (root, replacementRoot, target) => {
  if (!root) return;
  if (root.val === target) {
    if (replacementRoot) {
      replacementRoot.left = root.left !== replacementRoot ? root.left : null;
      replacementRoot.right =
        root.right !== replacementRoot ? root.right : null;
    }
    root.left = null;
    root.right = null;
    return replacementRoot;
  } else root.left = replaceMin(root.left, replacementRoot, target);
  return root;
};

let lib = require('./utilities.js');
let five = new lib.TreeNode(5);
five.right = new lib.TreeNode(6);
five.right.right = new lib.TreeNode(7);
five.left = new lib.TreeNode(3);
five.left.left = new lib.TreeNode(2);
five.left.right = new lib.TreeNode(4);

console.log(deleteNode(five, 5));
