/*Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2: 
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
 
Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.*/

// O(n2) solution / non-optimized
// function maxSubarray(nums) {
//   // declare a variable to represent the largest sum of the contiguous subarray, init as negative infinity
//   let largestSum = -Infinity;
//   // if the input array is empty, return a message indicating so
//   if (!nums.length) return 'There are no numbers in the input array.';
//   // iterate through the input array
//   for (let i = 0; i < nums.length; i++) {
//     // declare a variable to represent the sum of elements from the start of the array, init as zero;
//     let sumFromStart = 0;
//     for (let j = i; j < nums.length; j++) {
//       console.log([i, j]);
//       sumFromStart += nums[j];
//       console.log(sumFromStart);
//       // as we iterate, reassign largest sum as the larger of largestSum and sumFromStart
//       largestSum = Math.max(largestSum, sumFromStart);
//       console.log(largestSum);
//     }
//   }
//   // return the largest sum
//   return largestSum;
// }

// Optimized solution with O(n) time complexity
function maxSubarray(nums: number[]) {
  let previous: number = -Infinity;
  let largestSum: number = -Infinity;
  // if the input array is empty, return a message indicating so
  if (!nums.length) return 'There are no numbers in the input array.';
  for (let i = 0; i < nums.length; i++) {
    // iterate through the input array, reassign previous to equal the greater of previous + array[i] and array[i]
    previous = Math.max(previous + nums[i], nums[i]);
    console.log(previous);
    // and reassign largestSum to equal the larger of largestSum and previous
    largestSum = Math.max(largestSum, previous);
    console.log(largestSum);
  }
  return largestSum;
}

const numArray1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarray(numArray1)); // should print 6

const numArray2 = [1];
console.log(maxSubarray(numArray2)); // should print 1

const numArray3 = [5, 4, -1, 7, 8];
console.log(maxSubarray(numArray3)); // should print 23

const numArray4 = [];
console.log(maxSubarray(numArray4)); // should print 'There are no numbers in the input array.'
