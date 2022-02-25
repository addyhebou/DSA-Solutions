/**
 * @param {number[][]} grid
 * @return {number}
 
 
2 1 1
1 1 0
1 0 1

 
 */
class MyQueue {
  constructor() {
    this.q = [];
  }

  enqueue(elem) {
    this.q.push(elem);
  }

  dequeue() {
    let elem = this.q[0];
    this.q.shift();
    return elem;
  }

  isEmpty() {
    return this.q.length == 0;
  }

  size() {
    return this.q.length;
  }

  display() {
    this.q.forEach((element) => {
      console.log(element);
    });
  }
}

var orangesRotting = function (grid) {
  let minutes = -1;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2)
        minutes = Math.max(minutes, rotSurroundings(i, j, grid));
    }
  }
  return minutes;
};

let rotSurroundings = (row, col, grid) => {
  let q = new MyQueue();
  let minutes = -1;
  q.enqueue([row, col]);

  while (!q.isEmpty()) {
    minutes += 1;
    let qLen = q.size();
    for (let i = 0; i < qLen; i++) {
      let orange = q.dequeue();
      let r = orange[0];
      let c = orange[1];
      if (r - 1 >= 0 && grid[r - 1][c] === 1) {
        grid[r - 1][c] = 2;
        q.enqueue([r - 1, c]);
      }
      if (c - 1 >= 0 && grid[r][c - 1] === 1) {
        grid[r][c - 1] = 2;
        q.enqueue([r, c - 1]);
      }
      if (r + 1 < grid.length && grid[r + 1][c] === 1) {
        grid[r + 1][c] = 2;
        q.enqueue([r + 1, c]);
      }
      if (c + 1 < grid[r].length && grid[r][c + 1] === 1) {
        grid[r][c + 1] = 2;
        q.enqueue([r, c + 1]);
      }
    }
  }
  return minutes;
};

let grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

console.log(orangesRotting(grid));
