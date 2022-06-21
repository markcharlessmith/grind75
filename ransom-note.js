/*Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise. Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.*/

function scaryArtProject(ransomNote, magazine) {
  // declare an object
  const letterBank = {};

  // split the magazine string (and sorting for alphabetic order)
  const cutLetters = magazine.split('').sort();
  console.log(cutLetters);
  // iterate through each character in cutLetters array and store instances of letter in object
  for (let i = 0; i < cutLetters.length; i++) {
    if (!letterBank[cutLetters[i]]) letterBank[cutLetters[i]] = 1;
    else letterBank[cutLetters[i]] += 1;
  }
  console.log(letterBank);
  // iterate through ransomNote and lookup in object to see if required letters present
}

// console.log(scaryArtProject('a', 'b')); // expect false
// console.log(scaryArtProject('aa', 'ab')); // expect false
// console.log(scaryArtProject('aa', 'aab')); // expect true
console.log(scaryArtProject('radar', 'aardvark')); // expect true
