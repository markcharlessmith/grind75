/*Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
 
Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var topKFrequent = function (nums, k) {
//   // create an object
//   let obj = {};
//   // const result = [];
//   // sort the array
//   nums = nums.sort((a, b) => a - b);
//   // iterate through nums
//   for (let i = 0; i < nums.length; i++) {
//     if (!obj[nums[i]]) obj[nums[i]] = 1;
//     else obj[nums[i]] += 1;
//   }
//   console.log(obj);
//   // create multiple objects;
//   // console.log(Object.entries(obj));
//   // // sort the entries by the frequency of the number occurring
//   // const entries = Object.entries(obj).sort((a, b) => b[1] - a[1]);
//   // console.log(entries);
//   const result = [];

//   // for (let i = 0; i < k; i++) {
//   //   while (k > 0) {
//   //     result.push(entries[0][0]);
//   //     // entries[0].shift();
//   //     k--;
//   //   }
//   // }

//   console.log(entries);
//   console.log(result);
//   // for (let i = 0; i < result.length; i++) {
//   //   result[i].splice(0, i);
//   // }
//   return result;
// };

var topKFrequent = function (nums, k) {
  const result = [];
  const cache = {};

  for (let i = 0; i < nums.length; i++) {
    if (!cache[nums[i]]) cache[nums[i]] = 1;
    cache[nums[i]] += 1;
  }

  const entries = Object.entries(cache);
  entries.sort((a, b) => b[1] - a[1]);
  console.log(entries);

  for (let i = 0; i < k; i++) {
    entries[i][0] = Number(entries[i][0]);
    result.push(entries[i][0]);
  }

  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([2, 4, 4, 4, 7, 3, 3], 2));
console.log(topKFrequent([1], 1));
