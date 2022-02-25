var maxSubArray = function (nums) {
  // 1) make a subarray of the first parameter
  // 2) as along as the subarrays end bound is within scope
  //3) calculate sum of array
  //4) if sum < target, increase right, if < target, increase left,
  //if == target, push to global list, increase right and left
  //5) return global lst

  let output = [];
  let sum = nums[0];
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (sum < target) {
      right += 1;
      sum += nums[right];
    } else if (sum > target) {
      sum -= nums[left];
      left += 1;
    } else if (sum == target) {
      output.push(nums.slice(left, right + 1));
      right += 1;
      sum += nums[right];
    }
  }
};
