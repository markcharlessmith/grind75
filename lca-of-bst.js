/*Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example 1:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Example 3:
Input: root = [2,1], p = 2, q = 1
Output: 2
 

Constraints:
The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the BST.*/

// binary search tree definition
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

//
function lowestCommonAncestor(root, p, q) {
  if (root === null) return null;
  // if root.val is greater than p and q, then the LCA is in the left side
  if (root.val > p && root.val > q) {
    return lowestCommonAncestor(root.left, p, q);
  }
  // if root.val is less than p and q, then the LCA is in the right side
  if (root.val < p && root.val < q) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
}

console.log(
  lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8)
); // should print: 6

let root1 = new TreeNode(6);
root1.left = new TreeNode(2);
root1.right = new TreeNode(8);
root1.left.left = new TreeNode(0);
root1.left.right = new TreeNode(4);
root1.left.right.left = new TreeNode(7);
root1.left.right.right = new TreeNode(9);

let p = 2;
let q = 8;
let lca = lowestCommonAncestor(root1, p, q);
console.log(lca.val);
console.log('LCA of ' + p + ' and ' + q + ' is ' + lca.val + '.');
