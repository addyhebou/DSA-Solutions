/* Three ways to implement

1) Brute force: O(n^2) nested for loop comparson
2) Two-pass map sweep: pass by list to add every num in map; pass by again to check if any key has 2 or above
3) One-pass map sweep: add in map as you go, as soon as one exceeds 1, return true

*/

// One-pass Map Sweep
let containsDuplicate = (nums) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    if (!map.hasOwnProperty(key)) map[key] = 0;
    map[key] += 1;
    if (map[key] > 1) return true;
  }
  return false;
};
