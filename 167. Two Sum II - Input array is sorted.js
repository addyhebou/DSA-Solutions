let twoSum = (numbers, target) => {
  // 1) Init two pointers
  let left = 0;
  let right = numbers.length - 1;

  // 2) Iterate from inside in
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum == target) return [left + 1, right + 1];
    if (sum < target) left += 1;
    if (sum > target) right -= 1;
  }

  return [-1, -1];
};
