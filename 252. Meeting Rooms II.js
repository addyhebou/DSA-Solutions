/*
Given an array of meeting time intervals consisting of start and end times [s1, e1], [s2, e2], ... ,
determine if a person could attend all meetings.

For example,
Given [ [0, 30], [5, 10], [15, 20] ],
return false.
*/

let canAttend = (meetings) => {
  /*
    1) Iterate over intervals
    2) Check if intervals overlap -> return true or false
    */

  // 1) Sort meetings
  meetings.sort((a, b) => {
    b[0] - a[0];
  });

  // 2) Start off result array
  let result = [meetings[0]];

  // 3) Iterate
  for (let i = 1; i < meetings.length; i++) {
    let meeting1 = result[result.length - 1];
    let meeting2 = meetings[i];
    if (overlap(meeting1, meeting2)) return false;
  }
  return true;
};

let overlap = (prior, next) => {
  return next[0] < prior[1];
};

console.log(
  canAttend([
    [0, 29],
    [29, 40],
    [45, 120],
  ])
);
