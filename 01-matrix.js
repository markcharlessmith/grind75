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

var updateMatrix = function (mat) {
  var knownZeros = [];

  for (var i = 0; i < mat.length; i++) {
    for (var j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        knownZeros.push([i, j]);
      }
    }
  }
  // console.log(knownZeros)
  for (var i = 0; i < mat.length; i++) {
    for (var j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        var smallestDelta = null;

        for (var k = 0; k < knownZeros.length; k++) {
          var delta =
            Math.abs(i - knownZeros[k][0]) + Math.abs(j - knownZeros[k][1]);
          if (smallestDelta === null || delta < smallestDelta) {
            smallestDelta = delta;
            // console.log(smallestDelta)
          }
        }
        mat[i][j] = smallestDelta;
      }
    }
  }
  return mat;
};

const matrix1 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
// console.log(updateMatrix(matrix1)); // expect [[0,0,0],[0,1,0],[0,0,0]]

const matrix2 = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];
console.log(updateMatrix(matrix2)); // expect [[0,0,0],[0,1,0],[1,2,1]]

const matrix3 = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
];
// console.log(updateMatrix(matrix3));
