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
  // declare an object which will contain key/value pairs of letters found in the magazine
  const letterBank = {};
  // split the magazine string
  const cutLetters = magazine.split('');
  // console.log(cutLetters);
  // iterate through each character in cutLetters array and store instances of letter in object
  for (let i = 0; i < cutLetters.length; i++) {
    if (!letterBank[cutLetters[i]]) letterBank[cutLetters[i]] = 1;
    else letterBank[cutLetters[i]] += 1;
  }
  // console.log(letterBank);
  // default boolean for notePossibility to true
  let notePossibility = true;
  // split ransomNote and iterate through to see if each letter in neededLetters is in letterBank
  // if so, decrement by 1
  const neededLetters = ransomNote.split('');
  neededLetters.forEach((letter) => {
    if (letterBank[letter]) {
      letterBank[letter] -= 1;
      if (letterBank[letter] < 0) notePossibility = false;
    } else notePossibility = false;
  });
  return notePossibility;
}

console.log(scaryArtProject('a', 'b')); // expect false
console.log(scaryArtProject('aa', 'ab')); // expect false
console.log(scaryArtProject('aa', 'aab')); // expect true
console.log(scaryArtProject('radar', 'aardvark')); // expect true
console.log(scaryArtProject('midnight', 'among the crowd inside here')); // expect true
