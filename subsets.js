/*Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [0]
Output: [[],[0]]
 
Constraints:
1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// var subsets = function (nums, depth = 0, subset = [], results = []) {
//   if (depth === nums.length) {
//     results.push([...subset]);
//   } else {
//     subsets(nums, depth + 1, subset, results);
//     // console.log(nums[depth])
//     subset.push(nums[depth]);
//     subsets(nums, depth + 1, subset, results);
//     subset.pop();
//   }
//   return results;
// };

// slicing approach
function subsets(nums) {
  const result = [];

  const generateSubset = (nums, subset = []) => {
    if (!nums.length) return result.push(subset);
    generateSubset(nums.slice(1), [...subset, nums[0]]); // take it
    generateSubset(nums.slice(1), subset); // leave it
  };
  generateSubset(nums);
  return result;
}

console.log(subsets([1, 2, 3])); // expect [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])); // expect [[],[0]]
