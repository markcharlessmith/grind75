/*Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 
Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums: number[]) {
  const answer: number[] = [];
  // answer[i] equals the product of all elements of nums except nums[i]
  // .reduce()

  let tempArr: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    tempArr = nums;
    console.log(tempArr)
    tempArr.splice(i, 1);
    answer.push(nums.reduce((acc, curr) => acc * curr))
    console.log(answer)
    // tempArr = nums;
  }
  return answer;
};

console.log(productExceptSelf([1,2,3,4])) // expect [24,12,8,6]
// console.log(productExceptSelf([-1,1,0,-3,3])) // expect [[0,0,9,0,0]]