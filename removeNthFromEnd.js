/**
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let cursorA = dummy;
  let cursorB = dummy;

  for (let i = 0; i < n + 1; i++) {
      cursorB = cursorB.next;
  }

  while (cursorB) {
      cursorA = cursorA.next;
      cursorB = cursorB.next;
  }

  cursorA.next = cursorA.next.next;
  return dummy.next;
};