/*Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1 

Constraints:
1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
*/

// O(n) solution
// function binarySearch(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) return i;
//   }
//   return -1;
// }

// O(log n) solution
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // console.log([left, mid, right]);
    if (nums[mid] === target) {
      return mid;
    }
    // Check to see if the left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        // target is in the left
        right = mid - 1;
      } else {
        // target is in the right
        left = mid + 1;
        // console.log([nums[left], nums[right]])
      }
    }
    // Otherwise, the right side must be the side that is sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        // target is in the right
        left = mid + 1;
      } else {
        // target is in the left
        right = mid - 1;
      }
    }
  }
  return -1;
}

const numArray1 = [-1, 0, 3, 5, 9, 12];
console.log(binarySearch(numArray1, 9)); // should print 4
console.log(binarySearch(numArray1, 2)); // should print -1
