var preorderTraversal = function (root) {
  let out = [];

  let dfs = (root) => {
    if (!root) return;
    out.push(root.val);
    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);
  return out;
};
