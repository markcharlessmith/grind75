/*Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // define a word
  // a word is a substr beginning and ending with a non-space character
  // iterate backwards through the string
  let substr = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    while (s[i] === ' ') {
      i--;
    }
    if (s[i] !== ' ') substr += 1;
    if (s[i - 1] === ' ') return substr;
  }
  return substr;
};

console.log(lengthOfLastWord('luffy is still joyboy')); // expect 6
console.log(lengthOfLastWord('   fly me   to   the moon  ')); // expect 4
console.log(lengthOfLastWord('Hello World')); // expect 5
console.log(lengthOfLastWord('a')); // expect 1
console.log(lengthOfLastWord('')); // expect 0
