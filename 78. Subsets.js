let lib = require('./Not Leetcode/utilities');
// let subsets = (nums) => {
//   if (nums.length == 0) return null;
//   let master = [[]];
//   let p = 0;

//   while (p < nums.length) {
//     let qLen = master.length;
//     for (let i = 0; i < qLen; i++) {
//       let sub = [...master[i]];
//       sub.push(nums[p]);
//       master.push(sub);
//     }
//     p += 1;
//   }

//   return master;
// };

let subsets = (nums) => {
  let q = new lib.Queue();
  let output = [[]];
  nums.forEach((num) => {
    q.enqueue(num);
  });

  while (!q.isEmpty()) {
    let val = q.dequeue();
    let len = output.length;
    for (let i = 0; i < len; i++) {
      let s = output[i];
      let newSet = [...s];
      newSet.push(val);
      output.push(newSet);
    }
  }

  return output;
};

console.log(subsets([1, 2, 3]));

/*
nums: [1,2,3]
Master: [[], [1], [2], [1,2] ]
p = 2
qLen = 2;
sub = [3]



*/
