let eraseOverlapIntervals = (intervals) => {
  // 1) Sort the intervals
  intervals.sort((a, b) => {
    if (a[0] == b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  // 2) Get running queue
  let result = [intervals[0]];

  // 3) Check for overlaps
  let count = 0;
  for (let i = 1; i < intervals.length; i++) {
    let invA = result[result.length - 1];
    let invB = intervals[i];
    if (doesMerge(invA, invB)) count += 1;
    else result.push(invB);
  }

  return count;
};

let doesMerge = (invA, invB) => {
  return invB[0] < invA[1];
};

let lst = [
  [-52, 31],
  [-73, -26],
  [82, 97],
  [-65, -11],
  [-62, -49],
  [95, 99],
  [58, 95],
  [-31, 49],
  [66, 98],
  [-63, 2],
  [30, 47],
  [-40, -26],
];
console.log(eraseOverlapIntervals(lst));
