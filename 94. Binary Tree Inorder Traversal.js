var inorderTraversal = function (root) {
  let out = [];

  let dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    out.push(root.val);
    dfs(root.right);
  };

  dfs(root);
  return out;
};
