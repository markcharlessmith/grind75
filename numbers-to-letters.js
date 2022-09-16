/* Given a string of letters and umbers, output the letter following a number as many times as the number before it
For a simpler input, '2c1b3t' should return 'ccbttt'
For a more complex input, '12g4s1p' should return 'ggggggggggggssssp'
*/
function letterfier(str) {
  // initialize a result string
  let result = '';
  // split the string
  str = str.split('');
  // iterate through the string array, if the character at index i is a number, reassign it to be a number
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) && Number(str[i - 1])) {
      str[i - 1] = str[i - 1].concat(str[i]);
      str.splice(i, 1);
      console.log(str[i]);
    }
    // if (Number(str[i])) {
    // console.log(str[i]);
    // str[i] = Number(str[i]);
    // }
  }
  // iterate through the string array, if there are two consecutive numbers, join them together

  console.log(str);

  // check if the previous

  // return result;
  return result;
}

let str1 = '2c1b3t';
// console.log(letterfier(str1)); // expect 'ccbttt'

let str2 = '12g4s1p';
console.log(letterfier(str2)); // expect 'ggggggggggggssssp'
