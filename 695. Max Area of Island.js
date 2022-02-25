var maxAreaOfIsland = function (grid) {
  let getArea = (row, col, area) => {
    if (grid[row][col] === 1) {
      grid[row][col] = 0;
      area += 1;
      if (row - 1 >= 0) area = Math.max(area, getArea(row - 1, col, area));
      if (col - 1 >= 0) area = Math.max(area, getArea(row, col - 1, area));
      if (row + 1 < grid.length)
        area = Math.max(area, getArea(row + 1, col, area));
      if (col + 1 < grid[row].length)
        area = Math.max(area, getArea(row, col + 1, area));
    }
    return area;
  };

  let maxArea = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) maxArea = Math.max(maxArea, getArea(i, j, 0));
    }
  }

  return maxArea;
};
let grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
console.log(maxAreaOfIsland(grid));
