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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let output = [];
  let queue = JSQueue;
  queue.push(root);
  while (!queue.isEmpty) {
    let qLen = queue.length;
    let level = [];
    for (let i = 0; i < qLen; i++) {
      let node = queue.dequeue();
      if (node) {
        level.push(node);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    if (level) output.push(level);
  }
  return output;
};
