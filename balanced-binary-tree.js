/*Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as:
a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
 
Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true
 
Constraints:
The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104
*/

//bst definition
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function bstScale(root) {
  if (root === null) return 0;
  const left = bstScale(root.left);
  const right = bstScale(root.right);
  // if a previous call has returned false, need to pass false all the way up
  if (left === false || right === false || Math.abs(left - right) > 1) {
    return false;
  }
  // height of a root
  return Math.max(left, right) + 1;
}
function isBalanced(root) {
  if (root === null) return true;
  return bstScale(root) !== false;
}

let root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20);
root1.right.left = new TreeNode(15);
root1.right.right = new TreeNode(7);
console.log(root1);

console.log(isBalanced(root1)); //should print true

let root2 = new TreeNode(4);
root2.left = new TreeNode(12);
root2.right = new TreeNode(111);
root2.right.left = new TreeNode(28);
root2.right.right = new TreeNode(145);
root2.right.right.left = new TreeNode(113);

console.log(isBalanced(root2)); // should print false
