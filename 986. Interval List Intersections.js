let intervalIntersection = (firstList, secondList) => {
  // 1) Sort out the combined lists
  let combinedList = firstList.concat(secondList);
  combinedList.sort((a, b) => {
    return a[0] - b[0];
  });

  // 2) Declare results list
  let result = [combinedList[0]];
  let output = [];

  // 3) Iterate through combinedList
  for (let i = 1; i < combinedList.length; i++) {
    let int1 = result[result.length - 1];
    let int2 = combinedList[i];
    if (overlap(int1, int2)) {
      output.push([Math.max(int1[0], int2[0]), Math.min(int1[1], int2[1])]);
      result[result.length - 1][0] = Math.min(int1[0], int2[0]);
      result[result.length - 1][1] = Math.max(int1[1], int2[1]);
    } else result.push(int2);
  }

  // 4)
  return output;
};

let overlap = (prior, next) => {
  return next[0] <= prior[1];
};

let firstList = [
  [0, 2],
  [5, 10],
  [13, 23],
  [24, 25],
];
let secondList = [
  [1, 5],
  [8, 12],
  [15, 24],
  [25, 26],
];

console.log(intervalIntersection(firstList, secondList));
