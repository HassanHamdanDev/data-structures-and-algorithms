
'use strict';

const Stack = require('../stack/stack');

class PseudoQueue {
    constructor() {
        this.front = new Stack();
        this.rear = new Stack();
        this.length = 0;
    }

    enqueue(value) {
        this.rear.push(value);
        this.length++;
    }
    dequeue() {
        if (this.length === 0) return 'empty pseudoqueue';
        if (this.front.isEmpty()) {
            while (!this.rear.isEmpty()) {
                this.front.push(this.rear.pop());
            }
        }
        this.length--;
        return this.front.pop();
    }
}
module.exports = PseudoQueue;