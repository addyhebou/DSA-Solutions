let isSubtree = (root, subroot) => {
  if (root == null) return false;
  if (isSameTree(root, subroot)) return true;
  return isSubtree(root.left, subroot) || isSubtree(root.right, subroot);
};

let isSameTree = (root, subroot) => {
  if (root == null || subroot == null) return root == subroot;
  if (root.val == subroot.val) {
    return (
      isSameTree(root.left, subroot.left) &&
      isSameTree(root.right, subroot.right)
    );
  }
  return false;
};
