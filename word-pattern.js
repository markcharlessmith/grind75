/*Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const pairs = {};

  // split the strings
  const pArr = pattern.split('');
  const sArr = s.split(' ');
  console.log(sArr, pArr);
  if (pArr.length !== sArr.length) return false;
  if (sArr.every((element) => pArr.includes(element))) return true;

  // iterate through s and assign k/v pair in pairs
  for (let i = 0; i < sArr.length; i++) {
    if (!pairs[pArr[i]] && sArr[i] !== pairs[pArr[i - 1]]) {
      pairs[pArr[i]] = sArr[i];
    } else continue;
  }

  let exists = Object.values(pairs);

  function hasDuplicates(arr) {
    const noDups = new Set(arr);
    return arr.length !== noDups.size;
  }

  if (hasDuplicates(exists)) return false;

  // check if the two are the same
  for (let i = 0; i < sArr.length; i++) {
    console.log(pairs[pArr[i]], sArr[i]);
    if (pairs[pArr[i]] !== sArr[i]) return false;
  }
  return true;
};

console.log(wordPattern('abba', 'dog cat cat dog')); // expect true;
console.log(wordPattern('abbc', 'dog dog cat fish')); // expect false;
console.log(wordPattern('abb', 'dog')); // expect false;
console.log(wordPattern('abba', 'dog dog dog dog')); // expect false;
console.log(wordPattern('abc', 'dog cat dog')); // expect false;
console.log(wordPattern('deadbeef', 'd e a d b e e f'));
