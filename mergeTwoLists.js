/* Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Constraints:
* The number of nodes in both lists is in the range [0, 50].
* -100 <= Node.val <= 100
* Both l1 and l2 are sorted in non-decreasing order.
*/

var mergeTwoLists = function(l1, l2) {
  let mergedList;
  if (!l1) {
      return l2;
  }
  if (!l2) {
      return l1;
  }
  if (l1.val <= l2.val) {
    mergedList = new ListNode(l1.val);
    mergedList.next = mergeTwoLists(l1.next, l2)
  } else {
    mergedList = new ListNode(l2.val);
    mergedList.next = mergeTwoLists(l1, l2.next)
  }

  return mergedList;

};