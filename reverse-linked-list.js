/*Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 
Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?*/

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

function ListNode(value) {
  this.value = value;
  this.next = null;
}
const reverseList = function (head) {
  if (!head || !head.next) return head;
  let previous = null;
  let current = head;
  let next;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  head = previous;
  return head;
};

// add tests
