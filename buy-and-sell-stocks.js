/*You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

function bestTime(prices) {
  // iterate through the input array to find the lowest number and save its index to a variable
  let lowest = Infinity;
  let highest = -Infinity;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < lowest) {
      lowest = prices[i];
    }
    console.log(lowest);
  }
  // iterate through the array again and see what the index is of the greatest number after the stored number
  for (let i = prices[lowest]; i < prices.length; i++) {
    if (prices[i] > highest) {
      highest = prices[i];
    }
    console.log(highest);
  }
  // return the profit
  return highest - lowest;
}

const prices1 = [7, 1, 5, 3, 6, 4];
console.log(bestTime(prices1)); // should print 5
const prices2 = [8, 2, 4, 3, 12, 9];
console.log(bestTime(prices2));
