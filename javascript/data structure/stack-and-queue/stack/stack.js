
'use strict';

const Node = require('../lib/Node');

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.top = newNode;
            this.length++;
        } else {
            newNode.next = this.top;
            this.top = newNode;
            this.length++;
        }
    }

    pop() {
        if (this.isEmpty()) return 'The stack is Empty';
        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        this.length--;
        return temp.value;
    }

    peek() {
        if (this.isEmpty()) return 'The stack is Empty';
        return this.top.value;
    }

    isEmpty() {
        return this.length === 0;
    }
}

module.exports = Stack;
