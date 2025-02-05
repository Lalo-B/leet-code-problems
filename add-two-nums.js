var addTwoNumbers = function (l1, l2) {
    let head = new ListNode();
    let carry = 0;
    let current = head;
    while(l1 !== 0 || l2 !== 0 || carry !== 0){
        let val1 = l1.val ? l1.val : 0;
        let val2 = l2.val ? l2.val : 0;
        let sum = val1 + val2 + carry;
        carry = sum >= 10 ? 1 : 0;
        current.next = new ListNode(sum >= 10 ? sum - 10 : sum)
        l1.next ? l1 = l1.next : l1 = 0;
        l2.next ? l2 = l2.next : l2 = 0;
        current = current.next;
    }
return head.next;
};
