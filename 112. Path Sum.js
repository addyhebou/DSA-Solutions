let imp = require('./Not Leetcode/utilities');
// let hasPathSum = (root, sum) => {
//   if (!root) return false;
//   if (!root.left && !root.right) return root.val == sum;
//   return (
//     hasPathSum(root.left, sum - root.val) ||
//     hasPathSum(root.right, sum - root.val)
//   );
// };
let hasPathSum = (root, targetSum) => {
  if (!root) return false;

  let dfs = (root, sum) => {
    if (!root.left && !root.right) {
      return sum + root.val === targetSum;
    }
    sum += root.val;
    let left = false;
    let right = false;
    if (root.left) left = dfs(root.left, sum);
    if (root.right) right = dfs(root.right, sum);
    return left || right;
  };

  return dfs(root, 0);
};

let a = new imp.TreeNode(1);
let b = new imp.TreeNode(2);
// let c = new imp.TreeNode(6);
a.left = b;
// a.right = c;

console.log(hasPathSum(a, 1));

// a list of n numbers, a number l
// start from index 0, after pick i,  the next available index is i + l, you could pick any number as long as index is not smaller than i + l
// ask the maximum sum of numbers you can pick

/*

1. Clarifications

parameters: [array of n integers], integer l (steps)
return: integer describes max sum of numbers


2. Example
arr = [2,3,46,0], l = 2

48
3
46
0
return 48;


arr = [2,3,46,0], l = 2
index 0: 

[3, 2, 0, 46]
3  [0, 46]
3 [46]
3 + 46
2  [46]
2 + 46


[3, 2, 0, 46, 100, 3], l = 2

3: [0, 46, 100, 3]


1) Iterate over each number in the array
2) Evaluate what the max number is in the subarray (array[index i + l :])   
    3) Update max = max(max, maxnumber + array[index i]) 
4) return max;

*/

// [6,3,6,8,10,3,1,8,2,4] 3
// 6 + 8 + 8. = 24
// 0.  3.  7

// 6 (2, 6, [8,10,3,1,8,2,4]) , l = 3
//     8  [1,8,2,4]

/* 

arr = [6,3,6,8,10,3,1,8,2,4]

i = 0
subarray = [8,10,3,1,8,2,4]

2) iterate over the subarray
i = 0
subarray = [1,8,2,4]
rec call (ind 0) => 4 + arr[0](1) => 5
rec Call (ind 1) => 8
rec Call (ind 2) => 2
rec Call (ind 3) => 4



*/
// [1,2,3] 1

// let maxSub = (arr, l) => {
//     let max = -Infinity;
//     for (let i = 0; i < arr.length; i++){
//         let num = arr[i];
//         max = Math.max(max, num + evalMax(arr, i + l, l));
//     }
//     return max;
// }

// let evalMax = (arr, curr, l) => {
//     // let max = -Infinity;

//     // for(let i = start; i < arr.length; i++){
//     //     max = Math.max(max, arr[i]);
//     // }

//     if (curr === arr.length - 1) return arr[curr];
//     return Math.max(arr[curr], evalMax(arr, curr + 1));

//     // [1,2,4,0]
//     // return max;
// }

// let arr = [1,2,3]

/*


arr = [0, 1, 2, 4, 0], l = 1

index 0: subarr = [1,2,4,0]

max = 4
1, max




maxSum = 6





1: [2,3,-2,1]
[1,2,3,-2,1], 1
1 [2,3, -2, 1] , 1
    2 [3, -2, 1], max = 1

 */

// console.log(maxSub(arr, 1))

// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();
// });

// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

// function addNumbers(a, b) {
//   return a+b
// }

// function main() {
//     var a = parseInt(readLine());
//     var b = parseInt(readLine());;

//     var res = addNumbers(a, b);
//     console.log("The sum is " + res);
// }
