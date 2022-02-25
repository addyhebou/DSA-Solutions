var findFrequentTreeSum = function (root) {
  let sumMap = {};
  let helper = (root) => {
    if (!root) return 0;
    let left = helper(root.left);
    let right = helper(root.right);
    sumMap = addToMap(sumMap, root, left, right);
    return root.val + left + right;
  };

  helper(root);
  return mostFrequent(sumMap);
};

let addToMap = (map, root, leftSum, rightSum) => {
  let newMap = map;
  let sum = root.val + leftSum + rightSum;
  if (!newMap.hasOwnProperty(sum)) newMap[sum] = 0;
  newMap[sum] += 1;
  return newMap;
};

let mostFrequent = (map) => {
  let max = getMaxValue(map);
  let res = [];
  Object.keys(map).forEach((key) => {
    if (map[key] === max) res.push(key);
  });
  return res;
};

let getMaxValue = (map) => {
  let max = -Infinity;
  Object.keys(map).forEach((key) => {
    max = Math.max(max, map[key]);
  });
  return max;
};
