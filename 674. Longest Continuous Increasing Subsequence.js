let findLengthOfLCIS = (nums) => {
  let left = 0;
  let right = 1;
  let max = 0;
  let count = 1;

  while (right < nums.length) {
    if (nums[right] < nums[right - 1]) {
      count = 0;
      left = right;
    } else {
      count += 1;
      max = Math.max(max, count);
    }
    right += 1;
  }
  return max;
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
/*

l = 2
r = 4
length = 4
seq = [-1, 2]



*/
