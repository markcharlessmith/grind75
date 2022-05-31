/* phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

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
Since an empty string reads the same forward and backward, it is a palindrome.
 
Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

// base case: if string has length zero, return true
// base case: if string has length one, return true
// base case: if string has length two, and index zero equals index one
// recursive case: check if index 0 === index[string.length-1], if true, slice off first and last index

function validPalindrome(string) {
  // define regex to remove non-alphanumeric characters
  const regex = /[^A-Za-z0-9]/g;
  // declare a variable, assigned the input string converted to lower case and removing non-alphanumerics
  let stringToCheck = string.toLowerCase().replace(regex, '');
  console.log(stringToCheck);
  if (stringToCheck.length === 0) return true;
  if (stringToCheck.length === 1) return true;
  // recursively slice through the string
  if (stringToCheck[0] === stringToCheck[stringToCheck.length - 1]) {
    console.log(stringToCheck);
    return validPalindrome(stringToCheck.slice(1, -1));
  }
  return false;
}

const string1 = 'A man, a plan, a canal: Panama';
console.log(validPalindrome(string1)); //should return true;

const string2 = 'race a car';
console.log(validPalindrome(string2)); //should return false;

const string3 = '';
console.log(validPalindrome(string3)); //should return true
