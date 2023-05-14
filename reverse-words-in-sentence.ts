/*Problem: Reverse Words in a Sentence

Implement a function reverseWords that takes a sentence as input and returns a new sentence where the words are reversed, while preserving the order of the words.

Example:
reverseWords("Hello, world!") // Output: "world! Hello,"

Note:
A word is defined as a sequence of non-space characters.
The input sentence will not contain leading or trailing spaces.
The words in the sentence will be separated by a single space.
Write your solution in TypeScript, using string and array methods as necessary.*/

function reverseWords(sentence: string) {
  // split the sentence into an array of words
  const splitSentence = sentence.split(' ');
  // reverse the array of words
  const reversedWords = splitSentence.reverse();
  // join the array of words into a string
  const reversedSentence = reversedWords.join(' ');
  // return the string
  return reversedSentence;
}

console.log(reverseWords("Hello, world!")) // Output: "world! Hello,"
console.log(reverseWords("Hello, world! How are you?")) // Output: "you? are How world! Hello,"
console.log(reverseWords("My name is Mark")) // Output: "Mark is name My"