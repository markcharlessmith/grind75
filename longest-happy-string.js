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

/********* Uncomment these lines to test your work! *********/
// 'aabaabaabaa'  'a:8,b:3'

// function happyStrings(a, b, c) {
//   const letters = { a: a, b: b, c: c };
//   let resultingString = '';
//   if (letters.a === letters.b && letters.b === letters.c) {
//     while (letters.a > 1 && letters.b > 1 && letters.c > 1) {
//       resultingString += 'aa';
//       letters.a -= 2;
//       resultingString += 'bb';
//       letters.b -= 2;
//       resultingString += 'cc';
//       letters.c -= 2;
//     }
//     resultingString += 'a';
//     letters.a -= 1;
//     resultingString += 'b';
//     letters.b -= 1;
//     resultingString += 'c';
//     letters.c -= 1;
//   }
//   return resultingString;

//   // get the letter with the most value
//   // get the letter with the next most
//   // get the letter with the least value
// }

function happyStrings(a, b, c) {
  const letters = [
    ['a', a, 0],
    ['b', b, 0],
    ['c', c, 0],
  ];
  letters.sort((a, b) => b[1] - a[1]);

  let lastChar = '';
  let sum = a + b + c;
  const result = [];

  while (result.length < sum) {
    let counter = 0;
    while (counter < 3) {
      if (lastChar !== letters[counter][0]) {
        letters[counter][2] = 0;
      }
      counter++;
    }

    let i = 0;
    while (i < 3 && letters[i][2] === 2) {
      i++;
    }

    if (letters[i] && letters[i][1] > 0) {
      result.push(letters[i][0]);
      lastChar = letters[i][0];
      (letters[i][1] -= 1), (letters[i][2] += 1);
      letters.sort((a, b) => b[1] - a[1]);
    } else return result.join('');
  }

  return result.join('');
}

console.log(happyStrings(1, 1, 7)); // expect "ccaccbcc" or "ccbccacc"
// console.log(happyStrings(7, 1, 0)); // expect "aabaa"
// console.log(happyStrings(3, 3, 3)); // expect "aabbccabc" or "abccbaabc"
// console.log(happyStrings(3, 12, 5)); // expect "bbcbbcbbcbbabbabccba"
// console.log(happyStrings(1, 1, 1)); // expect "abc"
// console.log(happyStrings(0, 0, 0)); // expect ""
