let maxSubArray = (lst, size) => {
  let sum = -Infinity;
  let start = 0;
  let end = size;
  let window = lst.slice(start, end);

  while (end <= lst.length) {
    sum = Math.max(sum, getSum(window));
    start += 1;
    end += 1;
  }
  return sum;
};

let getSum = (lst) => {
  let sum = 0;
  lst.forEach((num) => {
    sum += num;
  });
  return sum;
};
