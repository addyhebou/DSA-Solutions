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

// Given a binary tree whose node values are integers from 0 - 9, return the sum of all root-to-leaf path numbers. A root-to-leaf path number is defined as the number obtained by using the value of each node on the root-to-leaf path as a digit of the number.

// For example, for this binary tree:
//        4
//       / \
//      /   \
//     /     \
//    /       \
//    9       0
//   / \
//  /   \
//  5   1

// The root-to-leaf path 4->9->5 represents the number 495.
// The root-to-leaf path 4->9->1 represents the number 491.
// The root-to-leaf path 4->0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = 1026.

/*

1. Assume root passed is never null

Process:
1. DFS - traverse to leaf node
base case: once a leaf node is hit, add this node as a string to the passed param -> add final num to the sum
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let rootSums = (root) => {
  let sum = 0;
  let dfs = (root, str) => {
    if (!root.left && !root.right) {
      str += root.val.toString();
      sum += parseInt(str);
      return;
    }
    let digit = root.val.toString();
    if (root.left) dfs(root.left, str + digit);
    if (root.right) dfs(root.right, str + digit);
    return;
  };
  dfs(root, '');
  return sum;
};

//        4
//       / \
//      /   \
//     /     \
//    /       \
//    9       0
//   / \
//  /   \
//  5   1

let four = new Node(4);
let nine = new Node(9);
let five = new Node(5);
let one = new Node(1);
let zero = new Node(0);

four.left = nine;
nine.left = five;
nine.right = one;
four.right = zero;

console.log(rootSums(four));

/*
1) Working with others
- Cross-team collab efforts to knock out deadlines – full autonomy
- Need to independently drive efforts

2) Importance of Design
- Must research popular, proper conventions for design (architectural)


Notes for Next Growth:
- accessiblity, mobile support, frontend fundamentals
*/

// Time: O(n), it has to search every node in the tree
// Space: average(logn), O(n)

// 1, 2, ... logn (for every call, str is 1 + 2 + 3 + ... + logn = logn^2)
