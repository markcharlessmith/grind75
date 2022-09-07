/*Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
Input: p = [1,2,1], q = [1,1,2]
Output: false
 
Constraints:
The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104
*/
/**
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function (p, q) {
  // base cases
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  // recursive case
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const test = new TreeNode(9);
test.left = new TreeNode(7);
test.right = new TreeNode(10);
test.left.left = new TreeNode(5);
test.left.right = new TreeNode(6);
test.right.right = new TreeNode(12);

const test2 = new TreeNode(9);
test2.left = new TreeNode(7);
test2.right = new TreeNode(10);
test2.left.left = new TreeNode(5);
test2.left.right = new TreeNode(6);
test2.right.right = new TreeNode(12);

const test3 = new TreeNode(9);
test3.left = new TreeNode(2);
test3.right = new TreeNode(11);
test3.left.left = new TreeNode(5);
test3.left.right = new TreeNode(6);
test3.right.right = new TreeNode(12);

console.log(isSameTree(test, test2));
console.log(isSameTree(test, test3));
