let search = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let mid;
  let pivot;

  while (low < high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] == target) return mid;
    if (nums[mid] < nums[high]) high = mid - 1;
    else low = mid + 1;
  }

  pivot = low;
  low = 0;
  high = nums.length - 1;

  while (low < high) {
    if (nums[pivot] == target) return pivot;
    if (nums[low] < target && target < nums[pivot]) high = pivot - 1;
    else low = pivot + 1;
  }

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] == target) return target;
    if (target < nums[mid]) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};
