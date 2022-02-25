let longestConsecutive = (nums) => {
  let ourSet = new Set(nums);
  let max = 0;

  ourSet.forEach((num) => {
    length = 0;
    while (ourSet.has(num + length)) {
      length += 1;
    }
    max = Math.max(length, max);
  });
  return max;
};

let nums = [100, 4, 200, 1, 3, 2];

console.log(longestConsecutive(nums));
