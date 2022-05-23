//two sum

/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.*/

// input: array of numbers, target integer
// output: array of indices

// O(n2) time complexity
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }
  return 'No two numbers sum to the target.';
}

console.log(twoSum([1, 3, 5, 7], 10)); // => should return 1, 3 (indexes of the numbers that add up to the target)
console.log(twoSum([1, 2, 3, 7], 11));
