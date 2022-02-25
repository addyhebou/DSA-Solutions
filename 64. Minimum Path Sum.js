var minPathSum = function (grid) {
  let map = {};

  let dfs = (row, col) => {
    if (row === grid.length - 1 && col === grid[row].length - 1)
      return grid[row][col];
    if (!map.hasOwnProperty([row, col])) {
      let down = row + 1 < grid.length ? dfs(row + 1, col) : Infinity;
      let right = col + 1 < grid[row].length ? dfs(row, col + 1) : Infinity;
      map[[row, col]] = Math.min(down, right) + grid[row][col];
    }
    return map[[row, col]];
  };

  return dfs(0, 0);
};

let grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

console.log(minPathSum(grid));
