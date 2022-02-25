let merge = (intervals) => {
  // 1) Sort all intervals by start key - O(nlogn)
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });

  // 2) Add initial interval to output
  let output = [];
  output.push(intervals[0]);

  // 3) Iterate over the rest of the intervals
  for (let i = 1; i < intervals.length; i++) {
    // 4) Check if start <= last to merge both intervals
    let startKey = intervals[i][0];
    let lastEndKey = output[output.length - 1][1];

    if (startKey <= lastEndKey) {
      lastEndKey = Math.max(lastEndKey, intervals[i][1]);
      output[output.length - 1][1] = lastEndKey;
    } else output.push([startKey, intervals[i][1]]);
  }

  // 5) Return output
  return output;
};
