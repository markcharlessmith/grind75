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

  if (pattern.length === 0 && s.length === 0) return true;

  const pArr = pattern.split('');
  const sArr = s.split(' ');

  if (pArr.length !== sArr.length) return false;
  if (sArr.every((element) => pArr.includes(element))) return true;

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
console.log(wordPattern('deadbeef', 'd e a d b e e f')); // expect true;
console.log(wordPattern('tqbf', 'the quick brown fox')); // expect true;
console.log(wordPattern('sausages!', 'the best is the best of all the rest')); // expect true
console.log(wordPattern('', ''));
