/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // 1) Build digit map and output list
  let map = getDigitsMap();
  let res = [];

  // 2) Backtrack explore each letter in digits
  let backtrack = (i, currStr) => {
    if (currStr.length === digits.length) {
      res.push(currStr);
      return;
    }
    for (let char of map[digits[i]]) {
      backtrack(i + 1, currStr + char);
    }
  };

  // 3) Kick off backtrack function with initial index to iterate through digits string
  if (digits.length > 0) backtrack(0, '');

  return res;
};

let getDigitsMap = () => {
  return {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
};
