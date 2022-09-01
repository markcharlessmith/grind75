/*A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  // define regex to remove non-alphanumeric characters
  const regex = /[^A-Za-z0-9]/g;
  // remove spaces and handle capitalization by making lower case all letters
  s = s.replaceAll(regex, '').toLowerCase();
  // console.log(s);
  // base case: if s.length === 0 or 1 return true
  function helper(s) {
    if (s.length === 0 || s.length === 1) return true;
    // recursive case: so long as the first and last indexes are strictly equal, slice off the first and last index
    if (s[0] === s[s.length - 1]) {
      return helper(s.slice(1, -1));
    }
    return false;
  }
  return helper(s);
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('rad'));
console.log(isPalindrome('Taco Cat'));
console.log(isPalindrome('Mark'));
console.log(isPalindrome('10101'));

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
Explanation: In this case, no transactions are done and the max profit = 0.*/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  // left is buying and right is selling;
  // maximum profit starts out at zero
  let mP = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      profit = prices[right] - prices[left];
      console.log(profit);
      mP = Math.max(mP, profit);
    } else {
      left = right;
    }
    right += 1;
  }
  return mP;
};

const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // expect 5

const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // expect 0

const prices3 = [7, 5, 3, 1, 4, 6];
console.log(maxProfit(prices3)); // expect 5
