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

// const longestPalindrome = (s) => {
//   // declare a variable initialized at 0 to represent the length of the longest palindrome (result)
//   let result = 0;
//   // base case: if there isn't an input s, return 0
//   if (!s) return result;
//   // base case: if the length of the input s is 1, return 1
//   if (s.length === 1) return ++result;
//   // iterate through the string
//   console.log(s.split(''));
//   s = s.split('');
//   const cache = {};
//   for (let i = 0; i < s.length; i++) {
//     if (!cache[s[i]]) cache[s[i]] = 1;
//     else cache[s[i]] += 1;
//   }
//   console.log(cache);

//   // iterate through the keys of the cache
//   for (const key in cache) {
//     console.log(cache[key]);
//     if (cache[key] % 2 === 0) {
//       result += cache[key];
//     } else if (cache[key] % 2 === 1 && cache[key] > 1) {
//       result += cache[key];
//     } else if (cache[key] === 1 && s.length % 2 === 1) {
//       result += cache[key];
//     }
//   }
//   // check if there are two of a given letter, add 2 to result, and remove them from s
//   // do this recursively
//   // lastly, check also if there is at least one letter that appears only once, if so, add 1 and remove it from s
//   // return result
//   return result;
// };

// Imagine we built our palindrome. It consists of as many partnered letters as possible, plus a unique center if possible. This motivates a greedy approach."
var longestPalindrome = function (s) {
  let longest = 0;
  let keys = {};

  for (const char of s) {
    // Keep track of character count in the keys object
    keys[char] = (keys[char] || 0) + 1;
    // If add 2 to the longest variable everytime we hit an even number count
    if (keys[char] % 2 == 0) longest += 2;
  }
  // If s.length is greater than longest then we know that we can add a unique char in the middle of the palindrome
  if (s.length > longest) {
    longest += 1;
    return longest;
  } else {
    return longest;
  }
  // return s.length > longest ? longest + 1 : longest;
};

console.log(longestPalindrome('abccccdd')); // expect 7
console.log(longestPalindrome('aabbccccc')); // expect 9
console.log(longestPalindrome('aabcc')); // expect 5
console.log(longestPalindrome('aabcd')); // expect 3
console.log(longestPalindrome('b')); // expect 1
console.log(longestPalindrome('')); //expect 0
