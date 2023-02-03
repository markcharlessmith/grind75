// You are given an array of N integers.  You want to split them into N/2 pairs in such a way that the sum of integers in each pair is odd. N is even and every element of the array must be present in exactly one pair.

// Your task is to determine whether it is possible to split the numbers into such pairs.  For example, given [2, 7, 4, 6, 3, 1], the answer is true.  One of the possible sets of pairs is (2, 7), (6, 3), (4, 1).  Their sums are respectively 9, 9, and 5, all of which are odd.

// Write a function solution, which, given an array of integers A of length N, returns true when it possible to create the required pairs, and false otherwise.

// Examples: 
// Given A = [2,7,6,4,3,1] expect true, as explained above
// Given A = [-1,1] expect false. -1 + 1 = 0 which is even
// Given A = [2, 1] expect true.  -1 + 2 = 1 which is odd
// Given A = [1,2,4,3] expect true
// Given A = [-1,-3,4,7,7,7] expect false

function solution(A) {
  let odd = 0, even = 0;

  for (let i = 0; i < A.length; i++) {
    // account for negatives
    if (A[i] % 2 === 0 || A[i] % 2 === -0) even += 1;
    else odd += 1;
  }
  // console.log(odd, even)
  return odd === even;
  }


console.log(solution([2, 7, 6, 4, 3, 1])) // expect true
console.log(solution([-1, 1])) // expect false
console.log(solution([2, -1]))  // expect true
console.log(solution([1, 2, 4, 3])) // expect true
console.log(solution([-1, 3, 4, 7, 7, 7])) // expect false
