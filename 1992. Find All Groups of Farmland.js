var findFarmland = function (land) {
  let output = [];

  let getCorners = (row, col) => {
    // @param {number} row, {number} col
    // @return {number[]}
    let xSet = [];
    let ySet = [];

    let dfs = (row, col) => {
      if (land[row][col] === 1) {
        land[row][col] = 0;
        xSet.push(row);
        ySet.push(col);
        if (row + 1 < land.length) dfs(row + 1, col);
        if (row - 1 >= 0) dfs(row - 1, col);
        if (col + 1 < land[row].length) dfs(row, col + 1);
        if (col - 1 >= 0) dfs(row, col - 1);
      }
    };

    dfs(row, col);

    let minX = Math.min(...xSet);
    let minY = Math.min(...ySet);
    let maxX = Math.max(...xSet);
    let maxY = Math.max(...ySet);
    return [minX, minY, maxX, maxY];
  };

  // Linear search
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[i].length; j++) {
      if (land[i][j] === 1) output.push(getCorners(i, j));
    }
  }

  return output;
};

let arr = [
  [1, 0, 0],
  [0, 1, 1],
  [0, 1, 1],
];
console.log(findFarmland(arr));
