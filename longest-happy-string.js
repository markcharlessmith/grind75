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

// function longestDiverseString(a, b, c) {
//   let letters = [
//     [a, 'a'],
//     [b, 'b'],
//     [c, 'c'],
//   ];

//   letters = letters.flat();
//   console.log(letters);

//   const newLetters = [];

//   for (let i = 0; i < letters.length; i++) {
//     if (typeof letters[i] === 'number') {
//       let counter = letters[i];
//       while (counter > 0) {
//         newLetters.push(letters[i + 1]);
//         counter--;
//       }
//     }

//     console.log(newLetters);

//     let newString = '';
//     for (let i = 0; i < newLetters.length; i++) {}
//   }
// }

// function longestDiverseString(a, b, c) {
// while (a > 0 || b > 0 || c > 0)
// }

// Alex and Keyla...
// function happyStrings(a, b, c) {
//   //take the longest input and start with that

//   //store input as objects with key as the letter and max frequency as the value
//   const inputs = [
//     ['a', a],
//     ['b', b],
//     ['c', c],
//   ];
//   console.log(inputs);
//   //declare longestHappyString and assign it an empty string
//   let longestHappyString =
//     //while loop as long as the biggest value among a,b,c is greater than zero
//     //if the biggest is greater than zero
//     //if the current last character in the longestHappyString is the current character then continue
//     //if it's greater than 2 concaticate 2 letters
//     //else concatinate 1

//     //if the second biggest is greater than zero
//     //if the current last character in the longestHappyString is the current character then continue
//     //if the it's greater than 2 concaticate 2 letters
//     //else concatinate 1

//     //if the third biggest is greater than zero
//     //if the current last character in the longestHappyString is the current character then continue
//     //if it's greater than 2 concatinate 2 letters
//     // else concatinate 1

//     //concatinate each letter

//     //if current value is greater than two concaticate 2 letters

//     //go to next (biggest) unique letter

//     //take the string we've generated and check it to see if it is happy
//     //use a helper function
//     function isHappy(str) {
//       // loop through the string (for loop)
//       //if (str[i] === str[i + 1] && str[i] === str[i + 2])
//       // remove str[i + 2]
//       //  if (str[str.length - 1] === str[i])
//     };
// }

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

function happyStrings(a, b, c) {}

/********* Uncomment these lines to test your work! *********/
// 'aabaabaabaa'  'a:8,b:3'
// console.log(happyStrings(1, 1, 7)); // should log: 'ccaccbcc' or 'ccbccacc'
// console.log(happyStrings(7, 1, 0)); // should log: 'aabaa'

console.log(happyStrings(1, 1, 7)); // expect "ccaccbcc" or "ccbccacc"
console.log(happyStrings(7, 1, 0)); // expect "aabaa"
