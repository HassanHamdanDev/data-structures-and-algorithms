'use strict';

const Node = require("./Node");

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
    }

    includes(value) {
        if (!this.head) return "empty LL";
        let checkNode = this.head;
        if (checkNode.value === value) return true;
        while (checkNode.next) {
            checkNode = checkNode.next;
            if (checkNode.value === value) return true;
        }
        return false;
    }

    toString() {
        let stringResult = '';
        if (!this.head) return "The List Empty";
        let checkNode = this.head;
        while (checkNode) {
            let nodeValue = checkNode.value;
            checkNode = checkNode.next;
            stringResult += (`{ ${nodeValue} } -> `);
        }
        stringResult += ('NULL');
        return stringResult;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
    }

    insertBefore(value, newValue) {
        let newNode = new Node(newValue);
        if (this.head) {
            if (this.head.value === value) {
                newNode.next = this.head;
                this.head = newNode;
                this.length += 1;
                return;
            }
            let checkNode = this.head;
            while (checkNode.next) {
                if (checkNode.next.value === value) {
                    let holdNode = checkNode.next;
                    checkNode.next = newNode;
                    newNode.next = holdNode;
                    this.length += 1;
                    return;
                }
                checkNode = checkNode.next;
            }
        }
        return "value not exist";
    }

    insertAfter(value, newValue) {
        let newNode = new Node(newValue);
        if (this.head) {
            if (this.tail.value === value) {
                this.tail.next = newNode;
                this.tail = newNode;
                this.length += 1;
                return;
            }
            let checkNode = this.head;
            while (checkNode) {
                if (checkNode.value === value) {
                    let holdNode = checkNode.next;
                    checkNode.next = newNode;
                    newNode.next = holdNode;
                    this.length += 1;
                    return;
                }
                checkNode = checkNode.next;
            }
        }
        return "value not exist";
    }

    kthFromEnd(k) {
        if (typeof k !== 'number' || k < 0 || !Number.isInteger(k)) return 'Exception not valid Number';
        if (this.head) {
            if (this.length === 1 && k === 0) return this.head.value;
            if (k < this.length) {
                let checkNode = this.head;
                for (let i = 1; i < this.length - k; i++) {
                    checkNode = checkNode.next;
                }
                return checkNode.value;
            }
        } return "Exception empty LL or more than the length";
    }
}

module.exports = LinkedList;
