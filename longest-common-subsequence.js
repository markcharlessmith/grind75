/*Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.*/

// var longestCommonSubsequence = function (text1, text2) {
//   let common = 0;
//   let longerString = text1;
//   let shorterString = text2;
//   const result = {};
//   if (text2.length > text1.length) {
//     longerString = text2;
//     shorterString = text1;
//   }

//   for (let i = 0; i < longerString.length; i++) {
//     for (let j = 0; j < shorterString.length; j++) {
//       console.log(shorterString[j]);
//       if (shorterString[j] === longerString[i]) {
//         if (
//           shorterString.indexOf(shorterString[j]) >
//           longerString.indexOf(longerString[i])
//         ) {
//           common += 1;
//           if (!result[shorterString[j]]) result[shorterString[j]] = 0;
//           console.log(result);
//         } else if (
//           shorterString.indexOf(shorterString[j]) <
//           longerString.indexOf(longerString[i])
//         ) {
//           // console.log(, common);
//           // common += 1;
//         } else {
//           common += 1;
//         }
//       }

//       //       console.log(common);
//     }
//   }
//   return common;
// };

// dynamic programming solution
var longestCommonSubsequence = function (text1, text2) {
  const dp = [];
  let m = text1.length;
  let n = text2.length;

  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // two  possible scenarioes:
      // 1. the current char of text1 and text2 does not match
      // 2. the current char of text1 and text2 matches

      if (text1.charAt(i - 1) != text2.charAt(j - 1)) {
        // check left and top for longer subsequence length
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      } else {
        // check diag for prev longest subsequence length and add 1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
    }
  }

  console.log(dp);
  return dp[m][n];
};
console.log(longestCommonSubsequence('abcde', 'ace')); // expect 3
// console.log(longestCommonSubsequence('abc', 'def')); // expect 0
// console.log(longestCommonSubsequence('abc', 'abc')); // expect 3
// console.log(longestCommonSubsequence('ezupkr', 'ubmrapg')); // expect 2
// console.log(longestCommonSubsequence('fafafa', 'afa')); // expect 3
