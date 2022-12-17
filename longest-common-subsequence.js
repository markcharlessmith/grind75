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
// var longestCommonSubsequence = function (text1, text2) {
//   const dp = [];
//   let m = text1.length;
//   let n = text2.length;

//   for (let i = 0; i <= m; i++) {
//     dp[i] = new Array(n + 1).fill(0);
//   }

//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       // two  possible scenarioes:
//       // 1. the current char of text1 and text2 does not match
//       // 2. the current char of text1 and text2 matches

//       if (text1.charAt(i - 1) != text2.charAt(j - 1)) {
//         // check left and top for longer subsequence length
//         dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//       } else {
//         // check diag for prev longest subsequence length and add 1
//         dp[i][j] = dp[i - 1][j - 1] + 1;
//       }
//     }
//   }

//   console.log(dp);
//   return dp[m][n];
// };

// var longestCommonSubsequence = function (text1, text2) {
//   let dp = new Array(text1.length + 1)
//     .fill(null)
//     .map(() => new Array(text2.length + 1).fill(0));

//   for (let i = 1; i <= text1.length; i++) {
//     for (let j = 1; j <= text2.length; j++) {
//       if (text1[i - 1] === text2[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1] + 1;
//       } else {
//         dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//       }
//     }
//   }

//   console.log(dp);

//   return dp[text1.length][text2.length];
// };

// DP solution from Neetcode
var longestCommonSubsequence = (text1, text2) => {
  const tabu = initTabu(text1, text2); /* Time O(N * M) | Space O(N * M) */

  search(text1, text2, tabu); /* Time O(N * M) | Space O(N * M) */

  return tabu[0][0];
};

var initTabu = (text1, text2) =>
  new Array(text1.length + 1)
    .fill() /* Time O(N) | Space O(N) */
    .map(() =>
      new Array(text2.length + 1).fill(0)
    ); /* Time O(M) | Space O(M) */

var search = (text1, text2, tabu) => {
  const [n, m] = [text1.length, text2.length];

  for (let x = n - 1; 0 <= x; x--) {
    /* Time O(N) */
    for (let y = m - 1; 0 <= y; y--) {
      /* Time O(M) */
      tabu[x][y] =
        text1[x] === text2[y] /* Space O(N * M) */
          ? tabu[x + 1][y + 1] + 1
          : Math.max(tabu[x + 1][y], tabu[x][y + 1]);
    }
  }
  console.log(tabu);
};

console.log(longestCommonSubsequence('abcde', 'ace')); // expect 3
// console.log(longestCommonSubsequence('abc', 'def')); // expect 0
// console.log(longestCommonSubsequence('abc', 'abc')); // expect 3
// console.log(longestCommonSubsequence('ezupkr', 'ubmrapg')); // expect 2
// console.log(longestCommonSubsequence('fafafa', 'afa')); // expect 3
