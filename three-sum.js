/*Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// var threeSum = function (nums) {
//   // initialize a result array
//   const triplets = [];
//   // handle edge case for unexpected input data type
//   if (!Array.isArray(nums)) return undefined;
//   // sort nums
//   nums = nums.sort((a, b) => a - b);
//   console.log(nums);
//   // two pointers
//   for (let i = 0; i < nums.length; i++) {
//     let p1 = i + 1;
//     let p2 = nums.length - 1;
//     while (p1 < p2) {
//       const sum = nums[i] + nums[p1] + nums[p2];
//       console.log(sum);
//       if (sum === 0) {
//         triplets.push([nums[p1], nums[p2], nums[i]]);
//         p1 = p1 + 1;
//         p2 = p2 - 1;
//         break;
//       } else if (sum > 0) p2 = p2 - 1;
//       else p1 = p1 + 1;
//     }
//   }
//   return triplets;
// };

var threeSum = function (nums) {
  // sort the array so we can use two pointers and be sure to not have any duplicates
  let triplets = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue;
    let [start, end] = [i + 1, nums.length - 1];

    while (start < end) {
      let total = nums[i] + nums[start] + nums[end];

      if (total > 0) end--;
      else if (total < 0) start++;
      else {
        triplets.push([nums[i], nums[start], nums[end]]);

        while (nums[start] === nums[start + 1]) start++;
        while (nums[end] === nums[end - 1]) end--;
        start++;
        end--;
      }
    }
  }

  return triplets;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // expect [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // expect []
console.log(threeSum([0, 0, 0])); // expect [[0,0,0]]
// console.log(threeSum(8)); // expect []
