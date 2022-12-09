//solution which works for most but not all test cases
// function twoArrays(k, A, B) {
//   if (!A || !B) return false;
//   let counter = 0;

//   for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < B.length; j++) {
//       if (A[i] + B[j] === k) {
//         counter += 1;
//       }
//     }
//   }

//   if (counter === A.length) return true;
//   return false;
// }

// optimal permuted solution using sort and reverse
function twoArrays(k, a, b) {
  let n = a.length;

  if (!a || !b || !a.length || !b.length) return false;

  a.sort((a, b) => a - b);

  b.sort((a, b) => a - b).reverse();

  for (let i = 0; i < n; i++) if (a[i] + b[i] < k) return false;

  return true;
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9])); // expect true;
console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4])); // expect false;
console.log(twoArrays(12, [6, 5, 4, 3, 2], [9, 10, 7, 6, 8])); // expect true;
console.log(twoArrays(4, [4], [0])); // expect true;
console.log(twoArrays(0, [1], [-1])); // expect true;
console.log(twoArrays(2, [2])); // expect false;
console.log(twoArrays(3, [1, 2, 3, 4, 0], [2, 1, 0, -1, 0])); // expect false;
console.log(twoArrays(7, [5, 4], [3, 2])); // expect true;
