/*Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
*/

function last(stack) {
  return stack[stack.length - 1];
}

// initializes the stack object
function MinStack() {
  this.stack = [];
  this.minStack = [];
}

// pushes the element val onto the stack
MinStack.prototype.push = function (val) {
  if (this.minStack.length === 0 || val <= last(this.minStack)) {
    this.minStack.push(val);
  }
  this.stack.push(val);
};

// removes the element on the top of the stack
MinStack.prototype.pop = function () {
  if (last(this.minStack) === last(this.stack)) {
    this.minStack.pop();
  }
  return this.stack.pop();
};

// returns the top element of the stack
MinStack.prototype.top = function () {
  console.log(last(this.stack));
  return last(this.stack);
};

// retrieves the minimum element in the stack
MinStack.prototype.getMin = function () {
  console.log(last(this.minStack));
  return last(this.minStack);
};

const minStack = new MinStack();
minStack.push(-2);
console.log(minStack);
minStack.push(0);
console.log(minStack);
minStack.push(-3);
console.log(minStack);
minStack.getMin(); // return -3
console.log(minStack);
minStack.pop();
console.log(minStack);
minStack.top();
console.log(minStack); // return 0
minStack.getMin(); // return -2
console.log(minStack);
