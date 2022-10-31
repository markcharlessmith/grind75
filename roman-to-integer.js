/*Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/

/**
 * @param {string} s
 * @return {number}
 */

// how to check if the input string contains invalid characters using regex:
// if (s.match(/[.A-B.E-H.J-K.N-U.W.Y-Z]+/g)) return 'error';

// create an object to store the letters and their associated values
const letterValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// create a new Set which contains the subtractions (as opposed to the additions)
const substractions = new Set(['IV', 'IX', 'XL', 'XC', 'CD', 'CM']);

// helper function to check if there is an invalid char
const getSymbolValue = (char) => {
  if (!(char in letterValues)) {
    throw new Error('Input is not a Roman numeral');
  }
  return letterValues[char];
};

var romanToInt = function (s) {
  if (typeof s !== 'string') return 'please input a string';
  let integer = 0;
  for (let i = 0; i < s.length; i++) {
    const currentSymbol = s[i];
    const nextSymbol = s[i + 1];
    const symbolValue = getSymbolValue(currentSymbol);
    if (i !== s.length && substractions.has(`${currentSymbol}${nextSymbol}`)) {
      integer += getSymbolValue(nextSymbol) - symbolValue;
      i++; // Skip next symbol, already evaluated
    } else {
      integer += symbolValue;
    }
  }
  return integer;
};

console.log(romanToInt('III')); // expect 3
console.log(romanToInt('LVIII')); // expect 58
console.log(romanToInt('MCMXCIV')); // expect 1994
console.log(romanToInt('')); // expect 0
console.log(romanToInt(8)); // expect 'please input a string'
console.log(romanToInt('Q')); // expect Error: Input is not a Roman numeral
