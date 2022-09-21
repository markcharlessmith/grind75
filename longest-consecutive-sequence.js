/* Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 
Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // edge case: if array is empty, return 0
  if (nums.length === 0) return 0;
  // sort the input array, and remove duplicates using filter
  nums = nums
    .sort((a, b) => a - b)
    .filter((el, index) => nums.indexOf(el) === index);
  console.log(nums);

  let counter = 0;
  let maxConsecCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] - 1) {
      console.log([nums[i], nums[i + 1] - 1]);
      counter += 1;
      if (counter >= maxConsecCount) maxConsecCount = counter;
    } else {
      counter = 0;
    }
    console.log(counter);
  }
  console.log(maxConsecCount);
  // return result.length;
  return 1 + maxConsecCount;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // expect 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // expect 9
console.log(longestConsecutive([0])); // expect 1
console.log(longestConsecutive([]));
