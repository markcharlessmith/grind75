/*Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
The distance between two adjacent cells is 1.

Example 1:
Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]

Example 2:
Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]
 
Constraints:
m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
mat[i][j] is either 0 or 1.
There is at least one 0 in mat.
*/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  // look left, look up, look right, look down
};

const matrix1 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
console.log(updateMatrix(matrix1)); // expect [[0,0,0],[0,1,0],[0,0,0]]

const matrix2 = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];
console.log(updateMatrix(matrix2)); // expect [[0,0,0],[0,1,0],[1,2,1]]
