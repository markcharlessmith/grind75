/*A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

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
Since an empty string reads the same forward and backward, it is a palindrome.*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  // define regex to remove non-alphanumeric characters
  const regex = /[^A-Za-z0-9]/g;
  // remove spaces and handle capitalization by making lower case all letters
  s = s.replaceAll(regex, '').toLowerCase();
  // console.log(s);
  // base case: if s.length === 0 or 1 return true
  function helper(s) {
    if (s.length === 0 || s.length === 1) return true;
    // recursive case: so long as the first and last indexes are strictly equal, slice off the first and last index
    if (s[0] === s[s.length - 1]) {
      return helper(s.slice(1, -1));
    }
    return false;
  }
  return helper(s);
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('rad'));
console.log(isPalindrome('Taco Cat'));
console.log(isPalindrome('Mark'));
console.log(isPalindrome('10101'));

/*You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.*/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  // left is buying and right is selling;
  // maximum profit starts out at zero
  let mP = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      profit = prices[right] - prices[left];
      console.log(profit);
      mP = Math.max(mP, profit);
    } else {
      left = right;
    }
    right += 1;
  }
  return mP;
};

const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // expect 5

const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // expect 0

const prices3 = [7, 5, 3, 1, 4, 6];
console.log(maxProfit(prices3)); // expect 5

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

function validNoteChecker(ransomNote, magazine) {
  const ransomNoteArr = ransomNote.split(' ');
  const magazineArr = magazine.split(' ');
  const magazineObj = {};

  magazineArr.forEach((word) => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  console.log(magazineObj);
  let notePossibility = true;

  ransomNoteArr.forEach((word) => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) notePossibility = false;
    } else notePossibility = false;
  });
  console.log(notePossibility);
  return notePossibility;
}

// console.log(validNoteChecker('a', 'b')); // expect false
// console.log(validNoteChecker('aa', 'ab')); // expect false
console.log(validNoteChecker('aa', 'aab')); // expect true
// console.log(validNoteChecker('the moon is cool', 'the cool is moon')); // expect true

// longestPalindrome
/*iven a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
*/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // edge cases
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;
  // account for case difference
  // s = s.toLowerCase();

  let length = 0;
  const letters = {};
  // count the instances of each char
  for (let i = 0; i < s.length; i++) {
    letters[s[i]] ? (letters[s[i]] += 1) : (letters[s[i]] = 1);
  }
  console.log(letters);

  // iterate through the keys of letters
  for (const key in letters) {
    if (letters[key] % 2 === 0) {
      length += letters[key];
    }
  }

  for (const key in letters) {
    if (s.length > length) length += letters[key];
    return length;
  }
};

console.log(longestPalindrome('abccccdd')); // expect 7
console.log(longestPalindrome('a')); // expect 1
console.log(longestPalindrome('aabbccccc')); // expect 9
console.log(longestPalindrome('aabcc')); // expect 5
console.log(longestPalindrome('aabcd')); // expect 3
console.log(longestPalindrome('b')); // expect 1
console.log(longestPalindrome('')); //expect 0
console.log(longestPalindrome('aa')); // expect 2
console.log(longestPalindrome('ccc')); // expect 3
console.log(longestPalindrome('ccd')); // expect 3

const myUsername = 'Mark';

let sum = 0;
sum = 1;
console.log(sum);

const result = [1, 2, 3, 4, 5];
result.push('Banana');
console.log(result);

const myObj = { name: 'Scott', programmer: true };
myObj.pets = { name: 'Wilbur' };
console.log(myObj);

// const subtractor = (n) => {
//   return n - 1;
// }

function subtractor(m, n) {
  let difference = m - n;
  return difference;
}
// console.log(difference)

console.log(subtractor(5, 3));

2 == '2';
2 === 2;

console.log(2 == '2');
console.log(2 === 2);
console.log(2 === '2');
console.log(2 != '3');
console.log(2 !== '2');

console.log(typeof myObj);

let now = new Date();
let nowNow = `${now.getMonth() + 1}/${now.getDate()}`;
console.log(nowNow);

// let res = 0;
// let num = 5;

// while (num > res) {
//   res++;
//   console.log(res);
//   num--;
//   console.log(num);
// }

// console.log(res);

const arr1 = ["1", "3", 4, 7]

function mixedArrReducer (arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (typeof arr[i] !== "number") arr[i] = +arr[i];
  //   }
  return arr.reduce((a, b) => +a + +b)
}

console.log(mixedArrReducer(arr1))

let x = "7"
console.log(typeof +x)