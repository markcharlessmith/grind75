//two sum

/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.*/

// input: array of numbers, target integer
// output: array of indices

// O(n2) time complexity solution
// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) return [i, j];
//     }
//   }
//   return 'No two numbers sum to the target.';
// }

// O(n) solution
function twoSum(arr, target) {
  // declare an empty object
  const cache = {};
  // iterate through the input array
  for (let i = 0; i < arr.length; i++) {
    // if the difference between the target and array at index i is in the cache,
    if (target - arr[i] in cache) {
      // console.log(target, arr[i], target - arr[i]);
      // console.log(cache);
      // return an array of the cache at the index of the target minus the array at index i, and i
      return [cache[target - arr[i]], i];
      // else, assign cache at array at index i to equal i
    } else {
      cache[arr[i]] = i;
      // console.log(cache[arr[i]]);
    }
  }
  return 'No two numbers sum to the target.';
}

//Similar solution, but using map
// var twoSum = function (nums, target) {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     let result = target - nums[i];

//     if (map.has(result)) return [i, map.get(result)];
//     map.set(nums[i], i);
//   }
// };

console.log(twoSum([1, 3, 5, 7], 10));
// => should return 1, 3 (indexes of the numbers that add up to the target)

console.log(twoSum([-1, -4, -5, 3, -7, 2, 14], -8));
// => should return 0, 4

console.log(twoSum([1, 2, 5, 7], 10));
// => should return 'No two numbers sum to the target.' - demonstrating that the same element is not being used twice (5+5)

console.log(twoSum([1, 2, 3, 7], 11));
// => should return 'No two numbers sum to the target.'
