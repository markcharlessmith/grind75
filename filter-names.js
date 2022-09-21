/* Given an input array of name strings, numbers and other data types, return an object in which the keys are unique numbers and the names are stored as values.  The other data types from the input array should not be passed to the object.  If no names are present in the input array, return 'No names present in input'.  

Example 1:
input: ["Mark", 7, "Ladybug", true, [1, 2, 3]]
output: {1: "Mark", 2: "Ladybug"}

Example 2:
input: [125, false, {key: "none"}, 24]
output: 'No names present in input'
*/

// function filterNames(arr) {
//   // create a result object
//   const result = {};

//   // create a count variable to represent the unique key for result object, init at 1
//   let count = 1;
//   // iterate through the input array
//   for (let i = 0; i < arr.length; i++) {
//     // if typeof arr[i] is a string, create a property on the result object with a key of count and a value of arr[i], then increment the count
//     if (typeof arr[i] === 'string') {
//       result[count] = arr[i];
//       count += 1;
//     }
//   }
//   // if result is an empty object, return 'No names present in input'
//   if (!result[count - 1]) return 'No names present in input';
//   // return result;
//   return result;
// }

// optimized solution
function filterNames(arr) {
  const result = {};
  let count = 1;
  // using filter
  const filteredArr = arr.filter((index) => typeof index === 'string');
  console.log(filteredArr);

  for (let i = 0; i < filteredArr.length; i++) {
    result[count] = filteredArr[i];
    count += 1;
  }
  if (!result[count - 1]) return 'No names present in input';
  return result;
}

console.log(filterNames(['Mark', 7, 'Ladybug', true, [1, 2, 3]]));
console.log(filterNames([125, false, { key: 'none' }, 24]));
