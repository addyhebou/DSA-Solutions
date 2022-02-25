/* PROBLEM: MY OUTPUT WONT BE ORDERED LIKE WHAT LEETCODE ASKS FOR */

let findClosestElements = (arr, k, x) => {
  //  1) 1st map of calculated values
  let map = {};
  arr.forEach((num) => {
    map[num] = Math.abs(num - x);
  });

  // 2) Build max heap of k values
  let maxHeap = new MaxHeap();
  Object.keys(map).forEach((val) => {
    maxHeap.add(val);
    if (maxHeap.size() > k) maxHeap.pop();
  });

  // 3) Break down tree - delete entries to prevent duplicate key access
  let output = [];
  for (let i = 0; i < maxHeap.size(); i++) {
    let val = maxHeap.pop();
    output.push(val);
    map.delete(val);
  }

  // 4) Output
  return output;
};
