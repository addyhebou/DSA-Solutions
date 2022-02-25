let maxFlips = (lst, flips) => {
  let output = [];
  let left = 0;
  let right = 0;

  while (right < lst.length) {
    if (lst[right] == 0) {
      if (flips == 0) {
        left += 1;
        flips += 1;
      }
      lst[right] = 1;
      flips -= 1;
    }
    if (lst.slice(left, right + 1).length > output.length) {
      output = lst.slice(left, right + 1);
    }
    right += 1;
  }
  return output;
};

let lst = [0, 1, 0, 0];
let seq = maxFlips(lst, 2);
console.log(seq);
