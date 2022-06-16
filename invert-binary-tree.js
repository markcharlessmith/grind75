/*Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const invertTree = function (root) {
  if (root) {
    let stored = root.left;
    root.left = root.right;
    root.right = stored;

    invertTree(root.left);
    invertTree(root.right);
  }
  return root;
};

// test case
const root1 = new TreeNode(4);
root1.left = new TreeNode(2);
root1.right = new TreeNode(7);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);
// [4, 2, 7, 1, 3, 6, 9];
console.log(invertTree(root1)); // should print: [4,7,2,9,6,3,1]
