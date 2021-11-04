'use strict';

const Node = require("./Node");

class LinkedList {
    constructor() {
        this.head = null
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    includes(value) {
        if (!this.head) return false;
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
        if (!this.head) return "the list empty";
        let checkNode = this.head;
        while (checkNode) {
            let nodeValue = checkNode.value;
            checkNode = checkNode.next;
            stringResult += (`{${nodeValue}} -> `);
        }
        stringResult += ('NULL');
        return stringResult;
    }
}

module.exports = LinkedList;
