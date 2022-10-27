/*Given a positive integers N, the task is to find the smallest number whose sum of digits is N.
Example: 
 

Input: N = 10
Output: 19
Explanation: 1 + 9 = 10 = N

Input: N = 18
Output: 99
Explanation: 9 + 9 = 18 = N
*/

// helper function
function getSum(n) {
  let sum = 0;
  while (n != 0) {
    sum = sum + (n % 10);
    n = Math.floor(n / 10);
  }
  return sum;
}

// Function to find the smallest number whose sum of digits is also N
function smallestNum(N) {
  let i = 1;
  while (1) {
    // Checking if number has
    // sum of digits = N
    if (getSum(i) == N) {
      return i;
    }
    i++;
  }
}

console.log(smallestNum(10)); // expect 19
console.log(smallestNum(18)); // expect 99
console.log(smallestNum(28)); // expect 1999
