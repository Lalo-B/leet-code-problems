class Node {
    constructor(data, nextNode = null) {
        this.data = data;
        this.next = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let curr = this.head.next;
        let i = 0;
        while (curr) {
            if (i === index) {
                return curr.data;
            }
            i++;
            curr = curr.next;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new Node(val);
        newNode.next = this.head.next;
        this.head.next = newNode;
        if (!newNode.next) {
            this.tail = newNode;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.tail.next = new Node(val);
        this.tail = this.tail.next;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let i = 0;
        let curr = this.head;
        while (i < index && curr) {
            i++;
            curr = curr.next;
        }
        if (curr && curr.next) {
            if (curr.next === this.tail) {
                this.tail = curr;
            }
            curr.next = curr.next.next;
            return true
        }
        return false
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let curr = this.head.next;
        let res = [];
        while (curr) {
            res.push(curr.data)
            curr = curr.next
        }
        return res
    }
}
