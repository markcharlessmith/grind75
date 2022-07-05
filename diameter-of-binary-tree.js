/*Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

 

Example 1:


Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
Example 2:

Input: root = [1,2]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-100 <= Node.val <= 100
*/

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */

const heightCounter = function (root) {
  if (!root) return 0;
  return 1 + Math.max(heightCounter(root.left), heightCounter(root.right));
};

const diameterOfBinaryTree = function (root) {
  if (!root) return 0;

  let leftHeight = heightCounter(root.left);
  let rightHeight = heightCounter(root.right);

  let left = diameterOfBinaryTree(root.left);
  let right = diameterOfBinaryTree(root.right);

  // console.log(leftHeight + rightHeight + 1, Math.max(left, right));
  return Math.max(leftHeight + rightHeight + 1, Math.max(left, right));
};

const test = new TreeNode(9);
test.left = new TreeNode(7);
test.right = new TreeNode(10);
test.left.left = new TreeNode(5);
test.left.right = new TreeNode(6);
test.right.right = new TreeNode(12);

console.log(heightCounter(test)); // expect 3
console.log('Diameter of the binary tree: ' + diameterOfBinaryTree(test)); // expect 5
