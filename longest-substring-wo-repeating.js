/*Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/
/**
 * @param {string} s
 * @return {number}
 */
// const lengthOfLongestSubstring = function (s) {
//   let resultString = '';
//   let count = 0;
//   for (let i = count; i < s.length; i++) {
//     console.log(resultString);
//     if (resultString.includes(s[i])) {
//     }
//     if (!resultString.includes(s[i])) {
//       resultString += s[i];
//       count += 1;
//       // console.log(resultString);
//     }
//   }
//   return count;
// };

const lengthOfLongestSubstring = function (s) {
  const substring = new Set();
  let longest = 0;
  let first = 0,
    last = 0;

  while (last < s.length) {
    if (substring.has(s[last])) {
      substring.delete(s[first]);
      first++;
    } else {
      substring.add(s[last]);
      longest = Math.max(longest, substring.size);
      last++;
    }
  }
  return longest;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // expect 3
console.log(lengthOfLongestSubstring('bbbbb')); // expect 1
console.log(lengthOfLongestSubstring('pwwkew')); // expect 3
