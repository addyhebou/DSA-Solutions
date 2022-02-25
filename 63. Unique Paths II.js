var uniquePathsWithObstacles = function (obstacleGrid) {
  let noObstacle = (row, col) => {
    return obstacleGrid[row][col] === 0;
  };

  if (noObstacle(0, 0) === false) return 0;
  let map = {};

  let dfs = (row, col) => {
    if (!map.hasOwnProperty([row, col])) {
      if (
        row === obstacleGrid.length - 1 &&
        col === obstacleGrid[row].length - 1
      ) {
        return noObstacle(row, col) ? 1 : 0;
      }
      let down =
        row + 1 < obstacleGrid.length && noObstacle(row + 1, col)
          ? dfs(row + 1, col)
          : 0;
      let right =
        col + 1 < obstacleGrid[row].length && noObstacle(row, col + 1)
          ? dfs(row, col + 1)
          : 0;
      map[[row, col]] = down + right;
    }
    return map[[row, col]];
  };

  return dfs(0, 0);
};
