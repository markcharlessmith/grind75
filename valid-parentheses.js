/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true
*/

const validParens = (input) => {
  // check input first
  if (input.length === 0) return true;
  if (input.length === 1) return false;
  if (input.length % 2 !== 0) return false;
  //create an object to hold the types of parens to check against
  const dict = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack = [];
  //create a stack to hold the parens
  //iterate through string
  for (const char of input) {
    // if the char is open, push the corresponding close onto the stack
    if (dict[char]) {
      console.log(char);
      stack.push(dict[char]);
    }
    console.log(stack);
    // if the char is a close
    if (char === ')' || char === ']' || char === '}') {
      if (char === stack[stack.length - 1]) {
        stack.pop();
      } else return false;
    }
  }
  return !stack.length;
};

console.log(validParens('()')); // expect true
console.log(validParens('()[]{}')); // expect true
console.log(validParens('(]')); // expect false
console.log(validParens('([])')); // expect true
console.log(validParens('(')); // expect false
console.log(validParens('')); // expect true
console.log(validParens('{([{])}')); // expect false

// extension: use recursion and .slice()
