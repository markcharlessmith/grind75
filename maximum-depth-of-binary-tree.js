/*Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
 
Constraints:
The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
*/

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/*
 *
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
  // use a helper function which accepts a node to recursively determine which side of tree is deeper
  const depthFinder = (node) => {
    // if there are no nodes return 0
    if (!node) return 0;
    // else return the greater of 1 + the evaluated result of depthFinder called with node.left as argument or 1 + evaluated result of depthFinder called with node.right as argument
    // console.log([depthFinder(node.left), depthFinder(node.right)])
    return Math.max(1 + depthFinder(node.left), 1 + depthFinder(node.right));
  };
  // return depth finder
  return depthFinder(root);
};

const test1 = new TreeNode(3);
test1.left = new TreeNode(1);
test1.right = new TreeNode(6);
test1.right.left = new TreeNode(5);
test1.right.right = new TreeNode(7);
console.log(maxDepth(test1)); // expect 3

const test2 = new TreeNode(1);
console.log(maxDepth(test2)); // expect 1

let test3;
console.log(maxDepth(test3)); // expect 0

const test4 = new TreeNode(1);
test4.left = new TreeNode(2);
test4.left.left = new TreeNode(3);
test4.left.left.left = new TreeNode(4);
console.log(maxDepth(test4)); // expect 4
