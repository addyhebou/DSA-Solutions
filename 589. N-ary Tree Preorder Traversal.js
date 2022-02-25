var preorder = function (root) {
  let out = [];

  let dfs = (root) => {
    if (!root) return;
    out.push(root.val);
    root.children.forEach((child) => {
      dfs(child);
    });
  };

  dfs(root);
  return out;
};
