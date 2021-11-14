
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
        this.length--;
        return this.rear.pop();
    }
}


module.exports = PseudoQueue;