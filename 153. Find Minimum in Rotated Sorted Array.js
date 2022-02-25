let findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while (nums[left] > nums[right]) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[mid - 1] && nums[mid] > nums[mid + 1])
      return nums[mid];
    if (nums[mid] > nums[left]) left = mid + 1;
    else if (nums[mid] < nums[left]) right = mid - 1;
  }
  return nums[left];
};

let tester = () => {
  let nums = [];
  nums.push([3, 4, 5, 1, 2]);
  nums.push([0, 1, 2, 3, 4, 5]);
  nums.push([1, 0]);
  nums.push([1]);
  nums.push([3, 1, 2]);
  nums.forEach((num) => {
    console.log(findMin(num));
  });
};

tester();
