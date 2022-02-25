/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = (nums, k) => {
  if (!nums) return null;

  // 1) Build an arry of k champions
  let champions = {};
  for (let i = 0; i < k; i++) {
    champions[nums[i]] = i;
    // key: val, number : index
  }

  //2) Iterate for the rest of the positions
  for (let i = k; i < nums.length; i++) {
    if (Math.min(Object.keys(champions)) < nums[i]) {
      delete champions[Math.min(Object.keys(champions))];
      champions[nums[i]] = i;
    }
  }

  // 3) return min
  return Math.min(Object.keys(champions));
};

/*
Time = O(n * k); n being every element in the list, k being how many champions to compare per element

Space = O(k); only k elements stored in a map

*/
