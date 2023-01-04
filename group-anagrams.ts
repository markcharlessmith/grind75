/*Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// input: array of strings
// output: array of arrays of strings, grouped accordingly

const groupAnagrams = (words: string[]) => {
  let anagrams = {};
  let collectedAnagrams: string[][] = [];

  for (let word of words) {
    // alphabetize letters
    let letters = word.split('').sort().join('');

    // create hash key-value pair for alphabetized letters of word if it does not exist
    anagrams[letters] = anagrams[letters] || [];

    // add word to value of the key which matches its letters
    anagrams[letters].push(word);
  }

  // iterate through anagrams hash keys and add their values as subarrays of the collectedAnagrams array
  for (let key in anagrams) {
    collectedAnagrams.push(anagrams[key]);
  }

  // return the array of arrays
  return collectedAnagrams;
};

const arr1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(arr1)); // expect: [["bat"],["nat","tan"],["ate","eat","tea"]]

const arr2 = [''];
console.log(groupAnagrams(arr2)); // expect: [[""]]

const arr3 = ['a'];
console.log(groupAnagrams(arr3)); // expect: [["a"]]
