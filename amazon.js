let performOperations = (arr, operations) => {
  if (arr.length == 0) return null;
  if (arr.length == 1) return arr;
  let left;
  let right;

  let reverseLst = (left, right) => {
    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left += 1;
      right -= 1;
    }
  };
  operations.forEach((op) => {
    left = op[0];
    right = op[1];
    reverseLst(left, right);
  });
  return arr;
};

let arr = [1, 2, 3];
let ops = [
  [0, 2],
  [1, 2],
  [0, 2],
];
// console.log(performOperations(arr, ops));

function simpleCipher(encrypted, k) {
  if (encrypted.length == 0) return null;
  if (k == 0) return encrypted;
  let newString = '';
  for (let i = 0; i < encrypted.length; i++) {
    let char = encrypted[i];
    newString += shift(char, k);
  }
  return newString;
}

let shift = (char, k) => {
  let letter = char.charCodeAt(0) - 65;
  k %= 26;
  letter -= k;
  if (letter < 0) letter += 26;
  letter += 65;
  return String.fromCharCode(letter);
};
// console.log(simpleCipher('UGBQTFOTHJ', 76));

function counting(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    for (j = i + 1; j < s.length + 1; j++) {
      sum += evaluate(s.slice(i, j));
    }
  }
  return sum;
}

let evaluate = (s) => {
  if (s.length < 2) return 0;
  if (s.length % 2 == 1) return 0;
  let zeroes = 0;
  let ones = 0;
  let switched = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '0') zeroes += 1;
    else ones += 1;
    if (s[i - 1] != s[i]) switched += 1;
  }
  if (zeroes == ones && switched < 2) return 1;
  else return 0;
};

console.log(evaluate('1001'));
