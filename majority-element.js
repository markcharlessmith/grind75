/*iven an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
*/

function majorityElement(numArray) {
  // handle edge cases
  if (!numArray) return undefined;
  if (numArray.length === 0) return 'array contains no numbers';
  // create a cache object
  const cache = {};
  // iterate through the array and assign each number as a key on an object
  for (let i = 0; i < numArray.length; i++) {
    if (!cache[numArray[i]]) {
      cache[numArray[i]] = 1;
    } else {
      cache[numArray[i]] += 1;
    }
  }
  console.log(cache);
  const result = Object.entries(cache).sort((a, b) => {
    return b[1] - a[1];
  })[0];
  return parseInt(result[0]);
  // return the key which has the greatest value stored
}

console.log(majorityElement([3, 2, 3])); // expect 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // expect 2
console.log(majorityElement([])); // expect 'array contains no numbers'
console.log(majorityElement([3, 4, 4, 4, 4])); // expect 4
console.log(majorityElement()); // expect undefined
