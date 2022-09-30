/*Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

Example 1:
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]

Example 2:
Input: n = 1
Output: [[1]]
 
Constraints:
1 <= n <= 20
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  // constraints as specified in problem & add'l edge case
  if (n < 0 || n > 20 || typeof n !== 'number') return undefined;

  // create a result array
  const result = [];

  // populate the result array with subarrays equaling n
  let subarrays = n;
  while (subarrays > 0) {
    result.push([]);
    subarrays--;
  }

  // declare start and end row and columns
  let startRow = 0,
    startColumn = 0,
    endColumn = n,
    endRow = n;

  console.log(result);
  return result;
};

console.log(generateMatrix(3)); // expect [[1,2,3],[8,9,4],[7,6,5]]

// console.log(generateMatrix(1)); // expect [[1]]

// console.log(generateMatrix(0)); // expect [[]]

// console.log(generateMatrix(21)); // expect undefined
