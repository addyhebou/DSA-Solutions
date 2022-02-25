/*
let exist = (board, word) => {
  board.forEach((i) => {
    board[i].forEach((j) => {
      if (board[i][j] == word[0] && searchPath(board, i, j, 0, word) == true) {
        return true;
      }
    });
  });
  return false;
};

let searchPath = (board, row, column, index, word) => {
  // This is the DFS search function
  if (index == word.length) return true; // when the index is outside of the word bounds
  if (
    row < 0 ||
    row >= board.length ||
    column < 0 ||
    column >= board[row].length ||
    board[row][column] != word[index]
  )
    return false;

  let storedChar = board[row][column];
  board[row][column] = ' ';
  let foundNextLetter =
    searchPath(board, row + 1, column, index + 1, word) ||
    searchPath(board, row - 1, column, index + 1, word) ||
    searchPath(board, row, column - 1, index + 1, word) ||
    searchPath(board, row, column + 1, index + 1, word);

  board[row][column] = storedChar;
  return foundNextLetter;
};

*/

let exist = (board, word) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if ((board[row][col] = word[0] && dfs(board, row, col, 0, word)))
        return true;
    }
  }

  return false;
};

let dfs = (board, row, col, index, word) => {
  if (index == word.length) return true; // break out of loop if we've traversed everything

  // 1. Check if current cell is out of bounds or if current cell doesn't match current letter in word
  if (
    row < 0 ||
    row >= board.length ||
    col < 0 ||
    col >= board[row].length ||
    board[row][col] != word[index]
  ) {
    return false;
  }

  // 2. Clear that cell's space with ' ' so it doesn't get re-evaluatd. Store in a temp variable
  let tempChar = board[row][col];
  board[row][col] = ' ';

  // 3. Check for the nextletter's path - increment index to increment word's index

  let checkLetterPath =
    dfs(board, row + 1, col, index + 1, word) ||
    dfs(board, row - 1, col, index + 1, word) ||
    dfs(board, row, col + 1, index + 1, word) ||
    dfs(board, row, col - 1, index + 1, word);

  // 4. Replace clear cell space with stored char temp
  board[row][col] = tempChar;
  return checkLetterPath;
};
