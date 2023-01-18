/* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
 
Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/

var searchInsert = function(nums: number[], target: number) {
  // going to involve doing a binary search 
  // input array is already sorted
  // declare a variable output which will represent the index where 
  let output: number = 0;
  // if target is greater than any number in the array, output is assigned nums.length, because that is the index it will be inserted at
  if (target > nums[nums.length - 1]) {
    output = nums.length;
    return output;
  }
  // if target is less than any number in the array, it will be inserted at index 0
  else if (target < nums[0]) return output;

  // binary search
    let left: number = 0;
    let right: number = nums.length - 1;
    let mid: number = 0;
    
      while(left <= right){
        mid = Math.floor((right + left) / 2);
        const number = nums[mid];
        if(number === target) return mid;
        else if (number < target) left = mid + 1;
        else right = mid - 1;
    }  
    // if target > nums[mid] is true, return mid + 1, else return mid
    return target > nums[mid] ? mid + 1 : mid;
    // return output;
};

console.log(searchInsert([1,3,5,6], 5)) // expect 2
console.log(searchInsert([1,3,5,6], 2)) // expect 1
console.log(searchInsert([1,3,5,6], 7)) // expect 4
console.log(searchInsert([2,3,5,6], 1)) // expect 0