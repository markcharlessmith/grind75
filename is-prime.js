/*Prime Number Problem

A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.  Your task is to create a method that tests a Long number input to see if it is a prime number. Below is a list of sample prime numbers you can use for testing:

2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101. 

Your method should return true if it is prime and false if it is not.

The goal of your method is to:
Return the correct result
Be as efficient as possible so that your method will perform well
Be robust so it does not fail

The method signature you are required to use is:
boolean isPrime(Long number)*/

// initial solution:
// if the number is less than two, or divisible by two, return false
// if the number is 2, return true
// initialize i at 2, loop, so long as i < num, check whether num % 1 === 0, if so, return false (num is not prime), increment i
// return true
function initialSolution(num) {
  if (num < 2 || num % 2 === 0) return false;
  if (num === 2) return true;

  let i = 2;
  while (i < num) {
    if (num % i === 0) return false;
    i++;
  }
  return true;
}
// test cases
console.log(initialSolution(3)); // expect true
console.log(initialSolution(4)); // expect false
console.log(initialSolution(11)); // expect true
console.log(initialSolution(12)); // expect false

// notes:
// - while loop is not optimal, especially for looping over larger input numbers
// - didn't account for num not being a valid input

// second solution, covering both numbers and bigint data types, and checking the validity of the input argument
// by using Math.sqrt(num) for numbers (and an equivalent condition for bigints), the amount of iterating up to really large numbers is reduced
const secondSolution = (num) => {
  if (!num || num % 1 !== 0) return false;
  if (typeof num === 'number') {
    if (num < 2) return false;
    if (num % 2 === 0) return false;
    let sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }
  if (typeof num === 'bigint') {
    for (let i = 3n; i * i <= num; i += 2n) {
      if (num % i === 0n) return false;
    }
    return true;
  }
  return false;
};
// test cases 3, 5, 7, 9
console.log(secondSolution(3)); // expect true
console.log(secondSolution(4)); // expect false
console.log(secondSolution(11)); // expect true
console.log(secondSolution(12)); // expect false
console.log(secondSolution(121)); // expect false
console.log(secondSolution(143)); // expect false
console.log(secondSolution(13.5)); //
// console.log(secondSolution(2n)); // expect true
// console.log(secondSolution(7n)); // expect true
// console.log(secondSolution(121n)); // expect false
// console.log(secondSolution(1000000000100011n)); //expect true

// notes:
// improvement over initial solution, but not optimal, as we are still iterating up to the square root of the number, and that could be really large depending on the size of the input

// third solution: checking for divisibility by 2, 3, 5, or 7

// if the type of the input, num, is a number, check if the number is less than 10
// if so, check to see whether num is a number within the set [2, 3, 5, 7]
// if so, the number is prime and return true; if not, number is not prime, return false
// if num is greater than 10, check whether num is divisible by any of the numbers within the set [2, 3, 5, 7]
// if there is a remainder when dividing the input num by any of those numbers, num is prime and return true; if not, num is not prime, return false
// similar logic applies for bigints, using the appropriate syntax
// if the input is not valid (ie, not a number or bigint), return 'please enter a valid number'

const isPrime = (num) => {
  return typeof num === 'number'
    ? num < 10
      ? [2, 3, 5, 7].includes(num)
      : ![2, 3, 5, 7].some((i) => !(num % i))
    : typeof num === 'bigint'
    ? num < 10n
      ? [2n, 3n, 5n, 7n].includes(num)
      : ![2n, 3n, 5n, 7n].some((i) => !(num % i))
    : false;
};

//for the number 11, we return four true values out of .some() when evaluating whether there is a remainder
console.log([11 % 2, 11 % 3, 11 % 5, 11 % 7]); // expect [1, 2, 1, 4]
console.log([
  Boolean(11 % 2),
  Boolean(11 % 3),
  Boolean(11 % 5),
  Boolean(11 % 7),
]); // expect [true, true, true, true]

//because 12 % 2 and 12 % 3 evaluate to 0 (there is no remainder), 12 is not be prime and we return false
console.log([12 % 2, 12 % 3, 12 % 5, 12 % 7]); // expect [0, 0, 2, 5]
console.log([
  Boolean(12 % 2),
  Boolean(12 % 3),
  Boolean(12 % 5),
  Boolean(12 % 7),
]); // expect [false, false, true, true]

// test cases with numbers
console.log(isPrime(3)); // expect true
console.log(isPrime(4)); // expect false
console.log(isPrime(11)); // expect true
console.log(isPrime(12)); // expect false
console.log(isPrime(101)); // expect true
console.log(isPrime(121)); // expect false*
console.log(isPrime(1016143)); //expect true
console.log(isPrime(67280421310721)); // expect true

// test cases with bigints
console.log(isPrime(4n)); // expect false
console.log(isPrime(7n)); //expect true
console.log(isPrime(1000000000100011n)); //expect true

// edge cases
console.log(isPrime(0)); //expect false
console.log(isPrime()); //expect false
console.log(isPrime(-2)); //expect false
console.log(isPrime(-2n)); //expect false

// function optimusPrime(num) {
//   const cache = {};
//   if (typeof num === 'number') {
//     return num < 10
//       ? [2, 3, 5, 7].includes(num)
//       : ![2, 3, 5, 7].some((i) => !(num % i));
//   } else if (typeof num === 'bigint') {
//     return num < 10
//       ? [2, 3, 5, 7].includes(num)
//       : ![2, 3, 5, 7].some((i) => !(num % i));
//   }
//   return false;
// }

// console.log(optimusPrime(121));

/*A palindrome is a string that is the same when read both forward and backwards. Create a method that tests a string input to see if it is, in fact, a palindrome.

Some examples would be mom, dad, madam, radar, victorrotciv and 7118117. Write a method what determines if a string is a palindrome.

The goal of your method is to:
Return the correct result
Be as efficient as possible so that your method will perform well
Be robust

The method signature is:
boolean isPalindrome(String str) */

// loop through the string
// check whether the string[i] === string[string.length - 1 - i]

function isPalindrome(str) {
  if (!str) return false;
  if (typeof str === 'number') {
    str = str.toString();
  }

  if (typeof str !== 'string') return false;
  if (str.length === 1) return true;
  if (str.length === 0) return false;
  for (let bi = 0, ei = str.length - 1; bi < ei; bi++, ei--) {
    while (str[bi] === ' ') {
      bi++;
    }
    while (str[ei] === ' ') {
      ei--;
    }
    if (str[bi] !== str[ei]) {
      if (str[bi].toLowerCase() !== str[ei].toLowerCase()) return false;
    }
    return true;
  }
}

console.log(isPalindrome('Aa     '));
console.log(isPalindrome(' rAdar'));
console.log(isPalindrome('Markram'));
console.log(isPalindrome('race car'));
console.log(isPalindrome('7118117'));
console.log(isPalindrome('  a man a plan a canal panama'));
console.log(isPalindrome(''));
console.log(isPalindrome('a'));
console.log(isPalindrome(18));
console.log(isPalindrome(null));
console.log(isPalindrome({ key: 'value' }));
