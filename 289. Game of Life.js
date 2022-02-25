var gameOfLife = function (board) {
  let deadMap = buildMap('dead', board);
  let aliveMap = buildMap('alive', board); // set of alive tuple coordinates (0,0)

  // countNeighbors returns array [num of alive, num dad]
  Object.keys(deadMap).forEach((dead) => {
    dead = [parseInt(dead[0]), parseInt(dead[2])];
    let aliveNeighbors = countAliveNeighbors(dead, board, aliveMap);
    if (aliveNeighbors === 3) board[dead[0]][dead[1]] = 1;
  });

  Object.keys(aliveMap).forEach((alive) => {
    let aliveNeighbors = countAliveNeighbors(alive, board, aliveMap);
    if (aliveNeighbors < 2 || aliveNeighbors > 3) board[alive[0]][alive[1]] = 0;
  });
};

let buildMap = (status, board) => {
  let output = {};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (status === 'dead' && board[i][j] === 0) output[[i, j]] = true;
      else if (status === 'alive' && board[i][j] === 1) output[[i, j]] = true;
    }
  }
  return output;
};

let countAliveNeighbors = (cell, board, aliveMap) => {
  // cell can be [1,0]
  let r = cell[0];
  let c = cell[1];
  let count = 0;

  let up = r - 1 >= 0 && aliveMap.hasOwnProperty([r - 1, c]);
  let down = r + 1 < board.length && aliveMap.hasOwnProperty([r + 1, c]);
  let left = c - 1 >= 0 && aliveMap.hasOwnProperty([r, c - 1]);
  let right = c + 1 < board[r].length && aliveMap.hasOwnProperty([r, c + 1]);

  let upleft = r - 1 >= 0 && left && aliveMap.hasOwnProperty([r - 1, c - 1]);
  let downleft =
    r + 1 < board.length &&
    c - 1 >= 0 &&
    aliveMap.hasOwnProperty([r + 1, c - 1]);
  let upright =
    r - 1 >= 0 &&
    c + 1 < board[r].length &&
    aliveMap.hasOwnProperty([r - 1, c + 1]);
  let downright =
    r + 1 < board.length &&
    c + 1 < board[r].length &&
    aliveMap.hasOwnProperty([r + 1, c + 1]);

  if (up) count += 1;
  if (down) count += 1;
  if (left) count += 1;
  if (right) count += 1;
  if (upleft) count += 1;
  if (downleft) count += 1;
  if (upright) count += 1;
  if (downright) count += 1;
  return count;
};

let board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];

console.log(gameOfLife(board));
