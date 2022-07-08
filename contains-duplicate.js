/*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

const containsDuplicate = function (nums) {
  // initialize a cache object
  const numCache = {};
  // iterate through nums array
  for (let i = 0; i < nums.length; i++) {
    // set each number as a key on an object
    if (!numCache[nums[i]]) numCache[nums[i]] = 1;
    else numCache[nums[i]] += 1;
    console.log(numCache);
  }
  // loop through the keys of the cache
  for (const key in numCache) {
    if (numCache[key] > 1) return true;
  }
  return false;
};

// tests
const numArray1 = [1, 2, 3, 1];
console.log(containsDuplicate(numArray1)); // expect true

const numArray2 = [1, 2, 3, 4];
console.log(containsDuplicate(numArray2)); // expect false

const numArray3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(numArray3)); // expect true
