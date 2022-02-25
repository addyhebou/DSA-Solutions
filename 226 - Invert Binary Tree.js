var invertTree = function (root) {
  if (!root) return null;
  if (root.right && root.left) {
    let temp = root.right;
    root.right = root.left;
    root.left = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
  }
  if (root.left) return invertTree(root.left);
  if (root.right) return invertTree(root.right);
  return root;
};
