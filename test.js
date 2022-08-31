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
  console.log(s);
  // base case: if s.length === 0 or 1 return true
  if (s.length === 0 || s.length === 1) return true;
  // console.log(s.slice(-1, 1))
  if (s[0] === s[s.length - 1]) {
    return isPalindrome(s.slice(-1, 1));
  }
  return false;
};

// console.log(s)
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('rad'));
console.log(isPalindrome('Taco Cat'));
console.log(isPalindrome('Mark'));
console.log(isPalindrome('10101'));
