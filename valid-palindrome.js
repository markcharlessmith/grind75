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

function validPalindrome(string) {
  // define regex to remove non-alphanumeric characters
  const regex = /[^A-Za-z0-9]/g;
  // declare a variable, assigned the input string converted to lower case and removing non-alphanumerics
  let stringToCheck = string.toLowerCase().replace(regex, '');
  console.log(stringToCheck);
  // recursively slice through the string
}

const string1 = 'A man, a plan, a canal: Panama';
console.log(validPalindrome(string1)); //should return true;

const string2 = 'race a car';
console.log(validPalindrome(string2)); //should return false;
