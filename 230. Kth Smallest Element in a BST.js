// let findKthSmallestInBST = (root, k) => {
//   // 1) Traverse BST
//   let queue = new Queue();
//   let nums = [];
//   let maxHeap = new MaxHeap();

//   queue.enqueue(root);
//   while (!queue.isEmpty) {
//     let qLen = queue.size();
//     for (let i = 0; i < qLen; i++) {
//       let node = queue.dequeue();
//       nums.push(node.data);
//       if (node.left) queue.enqueue(node.left);
//       if (node.right) queue.enqueue(node.right);
//     }
//   }

//   // 2) Build Max Heap off of Nums
//   nums.forEach((num) => {
//     maxHeap.add(num);
//     if (maxHeap.size() > k) maxHeap.pop();
//   });

//   // 3) Pop the top
//   return maxHeap.pop();
// };
// var kthSmallest = function (root, k) {
//   let val = [];
//   let search = (root, count) => {
//     if (!root) return count;
//     count = search(root.left, count);
//     if (count + 1 === k) {
//       val.push(root.val);
//     } else count += 1;
//     count = search(root.right, count);
//     return count;
//   };
//   search(root, 0);
//   return val[0];
// };

var kthSmallest = function (root, k) {
  let val = null;
  let search = (root, count) => {
    if (!root) return count;
    count = search(root.left, count);
    if (count + 1 === k) {
      val = root.val;
      return;
    } else count += 1;
    count = search(root.right, count);
    return count;
  };
  search(root, 0);
  return val;
};

let lib = require('./utilities.js');
let three = new lib.TreeNode(3);
let one = new lib.TreeNode(1);
let two = new lib.TreeNode(2);
let four = new lib.TreeNode(4);
three.left = one;
one.right = two;
three.right = four;
console.log(kthSmallest(three, 1));
