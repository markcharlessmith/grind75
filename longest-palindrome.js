/*Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.  Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
Input: s = "a"
Output: 1

Example 3:
Input: s = "bb"
Output: 2
 
Constraints:
1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
*/

/**
 * @param {string} s
 * @return {number}
 */

const longestPalindrome = (s) => {
  // declare a variable initialized at 0 to represent the length of the longest palindrome (result)
  let result = 0;
  // base case: if there isn't an input s, return 0
  if (!s) return result;
  // iterate through the string
  console.log(s.replace(s[3], ''));
  // check if there are two of a given letter, add 2 to result, and remove them from s
  // do this recursively
  // lastly, check also if there is at least one letter that appears only once, if so, add 1 and remove it from s
  // return result
  return result;
};

console.log(longestPalindrome('abccccdd')); // expect 7
// console.log(longestPalindrome('')); // expect 0
