/*
Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.  Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
 
Example 1:
Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

Example 2:
Input: arr = [1,3,6,10,15]
Output: [[1,3]]

Example 3:
Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]
 
Constraints:
2 <= arr.length <= 105
-106 <= arr[i] <= 106
*/

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  // edge case handling
  if (arr.length >= 105 || arr.length <= 2) return 'invalid array length';
  // declare a result array
  const result = [];
  // declare variable minDiff
  let minDiff = Infinity;
  // sort the array
  arr.sort((a, b) => a - b);
  // loop through the array
  for (let i = 0; i < arr.length - 1; i++) {
    // handle edge case
    if (arr[i] >= 106 || arr[i] <= -106) return 'invalid array element';
    if (arr[i + 1] - arr[i] < minDiff) {
      console.log(arr);
      minDiff = arr[i + 1] - arr[i];
      console.log(minDiff);
    }
  }
  // loop again, and push any pair of elements whose difference equals minDiff to result array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] === minDiff) {
      result.push([arr[i], arr[i + 1]]);
    }
  }
  // return result
  return result;
};

// test cases:
console.log(minimumAbsDifference([6, 7, 1]));
console.log(minimumAbsDifference([4, 2, 1, 3])); // expect [[1,2],[2,3],[3,4]]
console.log(minimumAbsDifference([1, 3, 6, 10, 15])); // expect [[1, 3]]
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])); // expect [[-14,-10],[19,23],[23,27]]
console.log(minimumAbsDifference([1, 2, 3, 5, 1])); // expect [[1, 1]]

// edge cases:
// 2 <= arr.length <= 105
console.log(minimumAbsDifference([1])); // expect 'invalid array length'
// -106 <= arr[i] <= 106
console.log(minimumAbsDifference([-107, 1, 2])); // expect 'invalid array element'
