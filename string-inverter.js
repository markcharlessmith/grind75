// Create a function that will accept a string as an input, and return the 'inverse' (not reverse) of that string as output.
// Ex. 1
// Input: 'abc'
// Output: 'zyx'
// Ex. 2
// Input: 'xyz'
// Output: 'cba'
// Ex. 3
// Input: 'javascript'
// Output: 'qzezhxirkg'
// var stringInverter(str) {

// }

function stringInverter(str) {
  const result = {};
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  //iterate through the alphabet
  for (let i = 0; i < alphabet.length; i++) {
    let tempAlph = alphabet;
    result[alphabet[i]] = alphabet[alphabet.length - 1];
    result[alphabet[alphabet.length - 1]] = alphabet[i];
    tempAlph.pop();
  }
  // create a new array
  let inverted = [];
  // iterate through the input string, and use the result object to replace values
  for (let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      inverted.push(result[str[i]]);
      // console.log(inverted);
    } else {
      inverted.push();
    }
  }
  // return inverted
  return inverted.join('');
}

console.log(stringInverter('abc')); // expect 'zyx'
console.log(stringInverter('xyz')); // expect 'cba'
console.log(stringInverter('javascript')); // expect 'qzezhxirkg'
