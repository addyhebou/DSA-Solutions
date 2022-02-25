/* 

    COMPANY: LinkedIn
    Max Depth of Binary Tree
    Input: [3,9,20,null,null,15,7]
    Output: 3
    Level: EASY

*/

function Node(left, right, value) {
  this.left = left || null;
  this.right = right || null;
  this.val = value || null;
}

let maxDepth = (root) => {
  let treeDepth = (root) => {
    if (root.left == null && root.right == null) return 1;
    else if (root.left != null) {
      if (root.right != null)
        return Math.max(treeDepth(root.left), treeDepth(root.right)) + 1;
      else return treeDepth(root.left) + 1;
    }
  };
  return treeDepth(root);
};

const main = () => {
  let root = new Node(
    new Node(null, null, '9'),
    new Node(new Node(null, null, '15'), new Node(null, null, '7'), '20'),
    '3'
  );

  console.log(maxDepth(root));
};

main();

/*
let maxDepth = (root) => {
  let count = 1;
  let search = (root) => {
    if (root.left == null && root.right == null) return 
    count += 1;
    if (root.left != null) search(root.left) 
    if (root.right != null) search(root.right) 
    return count;
  }
  return search(root);
}
*/  

/*

Remember: the movie theater analogy: 
to know what seat you're in, 
you must ask the front seat what height they're in

then yours is that number + 1

*/

function Node(left, right, value) {
  this.left = left || null;
  this.right = right || null;
  this.value = value || null;
}

let getMaxDepth = (node) => {
  let maxDepth = 0;
  let getTreeDepth = (node) => {
    if (node.left == null && node.right == null) {
      return 1;
    } else {
      if (node.left != null) {
        maxDepth = Math.max(maxDepth, getTreeDepth(node.left) + 1);
      }
      if (node.right != null) {
        maxDepth = Math.max(maxDepth, getTreeDepth(node.right) + 1);
      }
      return maxDepth;
    }
  };
  return getTreeDepth(node);
};
