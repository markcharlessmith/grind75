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
  // create a resultMatrix
  const resultMatrix = [];
  // console.log(mat.length);
  let rowCount = mat.length;
  while (rowCount > 0) {
    resultMatrix.push([]);
    rowCount--;
  }
  let columnCount = mat[0].length;
  console.log(mat[0].length);
  for (let i = 0; i < mat[0].length; i++) {
    // console.log(resultMatrix[i]);
    while (resultMatrix[i].length < mat[0].length) {
      resultMatrix[i].push(0);
    }
  }
  console.log(resultMatrix);
  // successfully created a result matrix which meets the criteria specified

  // iterate through the input matrix
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] !== 0) {
        // console.log(mat[i][j])
        // console.log(resultMatrix[i][j])
        resultMatrix[i][j] = mat[i][j];
      }
    }
  }

  // look left, look up, look right, look down
  return resultMatrix;
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
// console.log(updateMatrix(matrix2)); // expect [[0,0,0],[0,1,0],[1,2,1]]
