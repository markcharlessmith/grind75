/*Given an integer as a string, return a string that, when read aloud,
  describes how to write the integer from left to right, by stating
  how many of each number should be written and which number to write.
  For example, given the input “123”, the output should be “1 1 1 2 1 3”
  (read aloud, "one one, one two, one three"), while given the input “331123”,
  the output should be “2 3 2 1 1 2 1 3” (read aloud, "two three(s), two one(s), 
  one two, one three").
  A space should be used to separate the count from the numbers and to separate
  each count-number pair from the next.
  Example Input and Output
     Input: "123", Output: "1 1 1 2 1 3"
     Input: "44877", Output: "2 4 1 8 2 7"
     Input:  "9922555555", Output: "2 9 2 2 6 5"
     Input:  "33233111", Output: "2 3 1 2 2 3 3 1"
     Input: "0", Output: "1 0"*/


// function integerStoryTime(string) {
//   // instaniate a count variable
//   let count = 1;
//   // instaniate a currentNum variable
//   let currentNum = string[0];
//   // create a result string variable
//   let resultStr = '';
  
//   // iterate through the input string
//     for (i = 1; i < string.length; i++) {
//     if (string[i] === string[i - 1]) {
//       count++;
//     } 
//     // if we're on the last index
//     if (i === string.length - 1) {
//       // if the same as previous number, add one to count, concatenate count + ' ' + currentNum + ' ' to resultStr
//       if (string[i] === string[i - 1]) {
//         count++;
//         resultStr += count + ' ' + currentNum + ' ';
//       }
//       // if not the same as previous number, concatenate count + ' ' + currentNum + ' ' to resultStr;
//       if (string[i] !== string[i - 1]) {
//         resultStr += count + ' ' + currentNum + ' ' + 1 + ' ' + string[i];
//       }
//     }
//     else {
//       // concatenate count + ' ' + currentNum + ' ' to resultStr;
//       resultStr += count + ' ' + currentNum + ' ';
//       currentNum = string[i];
//       count = 1;
//     }
//   }
  
//   // return new string that describes how to write the number from left to right 
//   return resultStr;
// } 

function integerStoryTime(string) {
  const results = [];
  let currentCount = 1;
  let currentNum = string[0];

  for (let i = 1; i < string.length; i++) {
    if (string[i] === currentNum) {
      currentCount++;
    } else {
      results.push(currentCount, currentNum);
      currentCount = 1;
      currentNum = string[i];
    }
  }
  results.push(currentCount, currentNum);
  return results.join(" ");
}

console.log(integerStoryTime("123")) // expect "1 1 1 2 1 3"
console.log(integerStoryTime("44877")) // expect "2 4 1 8 2 7"
console.log(integerStoryTime("9922555555")) // expect "2 9 2 2 6 5"
console.log(integerStoryTime("33233111")) // expect "2 3 1 2 2 3 3 1"
console.log(integerStoryTime("0")) // expect "1 0"

