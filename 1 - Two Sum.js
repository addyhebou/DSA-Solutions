let twoSum = (nums, target) => {
  let map = {};
  for (let index = 0; index < nums.length; index++) {
    map[nums[index]] = index;
    let key = target - nums[index];
    if (map.hasOwnProperty(key)) return [map[key], index];
  }
  return [];
};
