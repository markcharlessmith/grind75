/*Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
 
Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 
Follow up: Could you minimize the total number of operations done?*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// solution #1
// var moveZeroes = function (nums) {
//   let zeroCount = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) zeroCount += 1;
//   }

//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       result.push(nums[i]);
//     }
//   }

//   while (zeroCount) {
//     result.push(0);
//     zeroCount--;
//   }

//   // return result;
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = result[i];
//   }
//   return nums;
// };

// optimized solution
var moveZeroes = function (nums) {
  let nonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZero++] = nums[i];
    }
  }

  for (let i = nonZero; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // expect [1,3,12,0,0]
console.log(moveZeroes([0, 0, 1])); // expect [1, 0, 0]
console.log(moveZeroes([0])); //expect [0]
