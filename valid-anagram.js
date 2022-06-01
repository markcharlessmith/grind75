/*Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
 
Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.*/

// IDEA 1 - object lookup
// function anagramalizer(s, t) {
//   // declare storage obj init as {}
//   // iterate through first string (s) and assign each character as a key on storage with a value which gets init as 1 and gets 1 added if the key already exists
//   // iterate through second string (t)
//   // if t contains
// }

// IDEA 2 - sort and compare
function anagramalizer(s, t) {
  // split the stings, and sort them
  const firstSorted = s.split('').sort().join('');
  const secondSorted = t.split('').sort().join('');
  // compare the two strings
  if (firstSorted === secondSorted) return true;
  return false;
  console.log(firstSorted, secondSorted);
}

const str1 = 'anagram';
const str2 = 'nagaram';
console.log(anagramalizer(str1, str2)); // should print: true

const str3 = 'rat';
const str4 = 'car';
console.log(anagramalizer(str3, str4)); // should print: false

/*Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?*/
