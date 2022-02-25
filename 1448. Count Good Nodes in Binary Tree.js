let goodNodes = (root) => {
  let count = 0;

  let dfs = (root, pathMax) => {
    if (!root) return;
    if (!root.left && !root.right) {
      count += root.val >= pathMax;
      return;
    }
    count += root.val >= pathMax;
    dfs(root.left, Math.max(pathMax, root.val));
    dfs(root.right, Math.max(pathMax, root.val));
    return;
  };
  dfs(root, root.val);
  return count;
};
