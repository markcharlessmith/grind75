/*
Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 
Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// var spiralOrder = function (matrix) {
//   // edge cases
//   if (matrix.length === 0 || matrix[0].length === 0) return [];
//   if (matrix.length === 1 || matrix[0].length === 1) return matrix.flat();

//   const result = [];
//   // add the first subarray to result
//   result.push(matrix[0]);

//   let turnPoint = matrix[0].length - 1;

//   for (let i = 1; i < matrix.length; i++) {
//     if (matrix[i + 1]) {
//       console.log(matrix[i][turnPoint]);
//       result.push(matrix[i][turnPoint]);
//       matrix[i].pop();
//     } else {
//       //
//       result.push(matrix[i][turnPoint]);
//       while (turnPoint > 0) {
//         result.push(matrix[i][turnPoint - 1]);
//         turnPoint--;
//       }
//     }
//   }
//   matrix.shift();
//   matrix.pop();

//   // an additional iteration is needed here, while matrix.length > 0 (handle additional spirals)

//   if (matrix[0]) result.push(matrix[0]);

//   return result.flat();
// };

var spiralOrder = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return [];

  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  const result = [];

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }

    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }

    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }

      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }

      left++;
    }
  }

  return result;
};

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralOrder(matrix1)); // expect [1,2,3,6,9,8,7,4,5]

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(spiralOrder(matrix2));
// expect [1,2,3,4,8,12,11,10,9,5,6,7]

const matrix3 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(spiralOrder(matrix3));
// expect [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]

const matrix4 = [];
console.log(spiralOrder(matrix4)); // expect []

const matrix5 = [[1]];
console.log(spiralOrder(matrix5));

const matrix6 = [[3], [2]];
console.log(spiralOrder(matrix6));

const matrix7 = [
  [1, 2],
  [3, 4],
];
console.log(spiralOrder(matrix7));

const matrix8 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
console.log(spiralOrder(matrix8));
// expect [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13]

// currently 11 / 23 test cases passed.
