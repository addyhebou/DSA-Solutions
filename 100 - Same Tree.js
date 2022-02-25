var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val != q.val) return false;

  let leftSide = isSameTree(p.left, q.left);
  let rightSide = isSameTree(p.right, q.right);
  return leftSide && rightSide;
};
