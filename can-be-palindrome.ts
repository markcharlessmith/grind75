// Declare a function canBePalindrome that takes in a string and returns a boolean 
// indicating whether that string could become a palindrome after removing one character. 
// If the string is already a palindrome, it should return true as well.)

const canBePalindrome = (str: string) => {
  if (isPalindrome(str)) return true;

  for (let i = 0; i < str.length; i++) {
    //manipulate string removing each char at a time and checking to see if its a palindrome
    const newString = removeChar(str, i);
    if (isPalindrome(newString)) return true;
  }

  return false;
};

function removeChar(str: string, index: number): string {
  const first = str.slice(0, index);
  const second = str.slice(index + 1);
  return first + second;
}

function isPalindrome(str: string): boolean {
  //could filter out for unwanted characters
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
    // console.log(str)
  }
  return true;
}

console.log(canBePalindrome('abbac')); // should log: true;
console.log(canBePalindrome('abbc')); // should log: false
console.log(canBePalindrome('abbca')); // should log: true
console.log(canBePalindrome('abba')); // should log: true
