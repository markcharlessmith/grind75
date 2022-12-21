/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < numRows; i++) {
    let currRow = [];
    // console.log(result)
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        currRow.push(1);
      } else {
        // console.log(result[i - 1][j - 1] + result[i - 1][j])
        currRow.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(currRow);
  }
  return result;
};

console.log(generate(5)); // expect [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// console.log(generate(1)); // expect [[1]]
// console.log(generate(0)); // expect []
