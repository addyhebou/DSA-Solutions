var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  if (p.val === root.val || q.val === root.val) return root;
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  return root;
};
