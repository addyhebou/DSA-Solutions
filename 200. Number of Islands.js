var numIslands = function (grid) {
  let count = 0;

  let dfs = (row, col) => {
    if (grid[row][col] === '1') {
      grid[row][col] = '0';
      if (row - 1 >= 0) dfs(row - 1, col);
      if (row + 1 < grid.length) dfs(row + 1, col);
      if (col - 1 >= 0) dfs(row, col - 1);
      if (col + 1 < grid[row].length) dfs(row, col + 1);
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        count += 1;
        dfs(i, j);
      }
    }
  }

  return count;
};

let grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];
console.log(numIslands(grid));
