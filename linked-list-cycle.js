/*Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 
Constraints:
The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
*/

// linked list definition
function listNode(val) {
  this.val = val;
  this.next = null;
}
// input: head
// note: position (pos) is not passed as a parameter - it is used internally to denote the index of the node that tail's next pointer is connected to.
// output: boolean
const hasCycle = function (head) {
  // use two pointers: slow and fast
  // if tail doesn't have a position, return false
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return true;
  }
  return false;
};

// test cases
const testList1 = new listNode(3);
testList1.next = new listNode(2);
testList1.next.next = new listNode(0);
testList1.next.next.next = new listNode(-4);
testList1.next.next.next.next = testList1.next;
console.log(testList1);

console.log(hasCycle(testList1)); // should return true

const testList2 = new listNode(1);
testList2.next = new listNode(2);
testList2.next.next = testList2.next;
console.log(testList2);

console.log(hasCycle(testList2)); // should return true

const testList3 = new listNode(1);
testList3.next = null;

console.log(hasCycle(testList3)); //  should return false
