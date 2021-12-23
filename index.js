/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

const reorderList = (head) => {
  if (!head || !head.next || !head.next.next) return;

  // find mid
  let mid;
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next && slow.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  mid = slow;

  // reverse the later part
  let now = mid.next.next;
  let second = mid.next;
  let tmp = null;
  second.next = null;
  while (now) {
    tmp = now.next;
    now.next = second;
    second = now;
    now = tmp;
  }
  mid.next = second;

  // insert one after another
  let before = head;
  let after = mid.next;
  mid.next = null;
  while (after) {
    tmp = before.next;
    before.next = after;
    before = tmp;
    tmp = after.next;
    after.next = before;
    after = tmp
  }
};
