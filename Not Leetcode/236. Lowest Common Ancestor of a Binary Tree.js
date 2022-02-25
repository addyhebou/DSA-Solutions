var lowestCommonAncestor = function (root, p, q) {
  if (root.val === p.val || root.val === q.val) return root;
  if (!root.left && !root.right) return null;

  let left = null;
  let right = null;
  if (root.left) left = lowestCommonAncestor(root.left, p, q);
  if (root.right) right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return !right ? left : right;
};
