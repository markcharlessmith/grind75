/*You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 
Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Example 3:
Input: n = 4
Output: 5
Explanation: There are five ways to climb to the top.
1. 1 step + 1 step + 1 step + 1 step
2. 1 step + 1 step + 2 steps
3. 1 step + 2 steps + 1 step
4. 2 steps + 1 step + 1 step
5. 2 steps + 2 steps

Example 4:
Input: n = 5
Output: 8
Explanation: There are eight ways to climb to the top.
1. 1 step + 1 step + 1 step + 1 step + 1 step
2. 1 step + 1 step + 1 step + 2 steps
3. 1 step + 1 step + 2 steps + 1 step
4. 1 step + 2 steps + 1 step + 1 step
5. 2 steps + 1 step + 1 step + 1 step
6. 2 steps + 2 steps + 1 step
7. 2 steps + 1 step + 2 steps
8. 1 step + 2 steps + 2 steps
 

Constraints:
1 <= n <= 45
*/

// recursive solution;
const climbStairs = function (n) {
  if (n < 4) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

console.log(climbStairs(2)); // expect 2
console.log(climbStairs(3)); // expect 3
console.log(climbStairs(4)); // expect 5
console.log(climbStairs(5)); // expect 8
