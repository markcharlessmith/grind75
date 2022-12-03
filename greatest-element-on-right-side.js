/*  
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Example 1:
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]

Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.

Example 2:
Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.
*/

// function replaceElements(arr) {
//   if (arr.length <= 1) return [-1];
//   if (!Array.isArray(arr)) return [-1];
//   const result = Array.from(arr);
//   for (let i = 0; i < result.length; i++) {
//     result[i] = Math.max(...result.slice(i + 1));
//     console.log(result[i]);
//   }
//   result[result.length - 1] = -1;
//   return result;
// }

// optimized solution
function replaceElements(arr) {
  if (arr.length <= 1 || !Array.isArray(arr)) return [-1];

  let max = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    const curr = arr[i];
    arr[i] = max;
    max = Math.max(max, curr);
  }

  return arr;
}

const arr1 = [17, 18, 5, 4, 6, 1];
console.log(replaceElements(arr1)); // expect [18,6,6,6,1,-1]

const arr2 = [400];
console.log(replaceElements(arr2)); // expect [-1]

const arr3 = [];
console.log(replaceElements(arr3)); // expect [-1]

const arr4 = [-5, -1, 1, 14, 12, 2, 0];
console.log(replaceElements(arr4)); // expect [14,14,14,12,2,0,-1]

const arr5 = "I'm totally not an array";
console.log(replaceElements(arr5));
