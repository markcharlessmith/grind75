/*Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]
 
Constraints:
n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
 
Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function (nums) {
//   const result = [];
//   const visited = {};

//   let n = nums.length;

//   for (let i = 0; i < n; i++) {
//     visited[i + 1] = 0;
//     console.log(nums[i]);
//   }

//   for (let i = 0; i < n; i++) {
//     visited[nums[i]] += 1;
//   }

//   console.log(visited);

//   for (const key in visited) {
//     if (visited[key] === 0) result.push(parseInt(key));
//   }

//   return result;
// };

// solution using a Set
var findDisappearedNumbers = function (nums) {
  const target = nums.length;
  const res = [];

  const set = new Set([...nums]);

  for (let i = 1; i <= target; i++) {
    if (!set.has(i)) res.push(i);
  }
  return res;
};

const numArr1 = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(numArr1));
