var uniquePaths = function (m, n) {
  let map = {};

  let dfs = (row, col) => {
    if (row === m - 1 && col === n - 1) return 1;
    if (!map.hasOwnProperty([row, col])) {
      let down = row + 1 < m ? dfs(row + 1, col) : 0;
      let right = col + 1 < n ? dfs(row, col + 1) : 0;
      map[[row, col]] = down + right;
    }
    return map[[row, col]];
  };

  return dfs(0, 0);
};
