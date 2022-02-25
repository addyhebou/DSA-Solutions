var setZeroes = function (matrix) {
  let positions = collectZeroPositions(matrix);
  positions.forEach((tuple) => {
    matrix = changeRowAndCol(tuple, matrix);
  });
  return matrix;
};

let collectZeroPositions = (matrix) => {
  let positions = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) positions.push([row, col]);
    }
  }
  return positions;
};

let changeRowAndCol = (tuple, matrix) => {
  let row = tuple[0];
  let col = tuple[1];

  // Change row
  for (let c = 0; c < matrix[row].length; c++) {
    matrix[row][c] = 0;
  }

  // Change col
  for (let r = 0; r < matrix.length; r++) {
    matrix[r][col] = 0;
  }

  return matrix;
};
