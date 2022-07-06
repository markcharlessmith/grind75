/*Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 
Constraints:
The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// singly-linked list definition
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function MiddleNode(head) {
  let pointer = head;
  let count = 1;

  while (pointer.next) {
    pointer = pointer.next;
    count++;
  }

  count = Math.ceil(count / 2) + 1;
  console.log(count);

  return count;
}

const testList = new ListNode(1);
testList.next = new ListNode(2);
testList.next.next = new ListNode(3);
testList.next.next = new ListNode(4);
testList.next.next.next = new ListNode(5);

console.log(MiddleNode(testList)); // expect 3

const testList2 = new ListNode(1);
testList2.next = new ListNode(2);
testList2.next.next = new ListNode(3);
testList2.next.next = new ListNode(4);
testList2.next.next.next = new ListNode(5);
testList2.next.next.next.next = new ListNode(6);

console.log(MiddleNode(testList2)); // expect 4

const testList3 = new ListNode(1);
testList3.next = new ListNode(2);
testList3.next.next = new ListNode(3);
testList3.next.next = new ListNode(4);
testList3.next.next.next = new ListNode(5);
testList3.next.next.next.next = new ListNode(6);
testList3.next.next.next.next.next = new ListNode(7);
testList3.next.next.next.next.next.next = new ListNode(8);
testList3.next.next.next.next.next.next.next = new ListNode(9);
testList3.next.next.next.next.next.next.next.next = new ListNode(10);

console.log(MiddleNode(testList3)); // expect 6
