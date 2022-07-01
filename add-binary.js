/*Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
};

//process: take input binaries, convert them to base 10 numbers
// add them together
// convert that sum back to a binary

console.log(addBinary('11', '1')); // expect "100"
console.log(addBinary('1010', '1011')); // expect "10101"
