/* 
A string s is called happy if it satisfies the following conditions:

s only contains the letters 'a', 'b', and 'c'.
s does not contain any of "aaa", "bbb", or "ccc" as a substring.
s contains at most a occurrences of the letter 'a'.
s contains at most b occurrences of the letter 'b'.
s contains at most c occurrences of the letter 'c'.
Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".

A substring is a contiguous sequence of characters within a string.

Example 1:
Input: a = 1, b = 1, c = 7
Output: "ccaccbcc"
Explanation: "ccbccacc" would also be a correct answer.

Example 2:
Input: a = 7, b = 1, c = 0
Output: "aabaa"
Explanation: It is the only correct answer in this case.
 
Constraints:
0 <= a, b, c <= 100
a + b + c > 0
*/

function longestDiverseString(a, b, c) {
  let letters = [
    [a, 'a'],
    [b, 'b'],
    [c, 'c'],
  ];

  letters = letters.flat();
  console.log(letters);

  const newLetters = [];

  for (let i = 0; i < letters.length; i++) {
    if (typeof letters[i] === 'number') {
      let counter = letters[i];
      while (counter > 0) {
        newLetters.push(letters[i + 1]);
        counter--;
      }
    }

    console.log(newLetters);

    let newString = '';
    for (let i = 0; i < newLetters.length; i++) {}
  }
}

console.log(longestDiverseString(1, 1, 7)); // expect "ccaccbcc" or "ccbccacc"
// console.log(longestDiverseString(7, 1, 0)); // expect "aabaa"
