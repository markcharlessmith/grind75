/*The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

Example 1:
Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4

Example 2:
Input: n = 25
Output: 1389537
 
Constraints:
0 <= n <= 37
The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.*/

// recursive solution
function tribonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  if (n === 3) return 2;
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

// recursive solution using memoization
const memo = {0: 0, 1: 1, 2: 1};
var tribonacci = function(n: number): number {
    if (memo[n] != undefined) return memo[n];
    memo[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
    return memo[n];
  };
  

console.log(tribonacci(0)) // expect 0
console.log(tribonacci(3)) // expect 2
console.log(tribonacci(4)) // expect 4
console.log(tribonacci(5)) // expect 7
console.log(tribonacci(25)) // expect 1389537