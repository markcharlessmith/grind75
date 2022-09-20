/* Given a string of numbers and letters, output the letter following a number as many times as the number preceding it
For a simpler input, '2c1b3t' should return 'ccbttt'
For a more complex input, '12g4s1p' should return 'ggggggggggggssssp'
*/
// function letterfier(str) {
//   // initialize a result array
//   let result = [];
//   // split the string
//   str = str.split('');
//   // iterate through the string array
//   for (let i = 0; i < str.length; i++) {
//     // if str[i] and str[i-1] are numbers, concat them, and then splice i
//     if (Number(str[i]) && Number(str[i - 1])) {
//       str[i - 1] = str[i - 1].concat(str[i]);
//       str.splice(i, 1);
//     }
//   }
//   console.log(str);
//   // initialize a tempArray
//   const tempArray = [];
//   // iterate through the string array
//   for (let i = 0; i < str.length; i++) {
//     // if str[i] is a number, push the number to the tempArray
//     if (Number(str[i])) {
//       tempArray.push(Number(str[i]));
//       // else push the character
//     } else {
//       tempArray.push(str[i]);
//     }
//   }
//   console.log(tempArray);

//   // iterate through tempArray
//   // if tempArray[i] is a string && tempArray[i - 1] is a number,
//   // push tempArray[i] to result that number of times
//   for (let i = 0; i < tempArray.length; i++) {
//     if (
//       typeof tempArray[i] === 'string' &&
//       typeof tempArray[i - 1] === 'number'
//     ) {
//       while (tempArray[i - 1] >= 1) {
//         result.push(tempArray[i]);
//         tempArray[i - 1]--;
//       }
//     }
//   }
//   // return result;
//   return result.join('');
// }

// Optimized solution
const letterfier = (str) => {
  const result = [];
  const nums = '0123456789';
  let i = 0;
  let j = 0;

  while (j < str.length) {
    if (nums.includes(str[j])) j++;
    else {
      const currNum = Number(str.slice(i, j));
      for (let k = 0; k < currNum; k++) {
        result.push(str[j]);
      }
      j++;
      i = j;
    }
  }
  return result.join('');
};

let str1 = '2c1b3t';
console.log(letterfier(str1)); // expect 'ccbttt'

let str2 = '12g4s1p';
console.log(letterfier(str2)); // expect 'ggggggggggggssssp'
