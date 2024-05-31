/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
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
var deleteDuplicates = function (head) {
  if (head === null) return head;

  const uniqList = { val: head.val, next: null };

  const uniq = (head, uniqList) => {
    if (head.next) {
      if (head.val === head.next.val) {
        // 当当前值与下一个值相等时，跳过当前节点，继续比对下一节点
        uniq(head.next, uniqList);
      } else {
        // 当当前值与下一节点值不相等时，保存当前节点的值到uniqList，继续比对head下一个值
        uniqList.next = { val: head.next.val, next: null };
        uniq(head.next, uniqList.next);
      }
    }
  };
  uniq(head, uniqList);

  return uniqList;
};
// @lc code=end
