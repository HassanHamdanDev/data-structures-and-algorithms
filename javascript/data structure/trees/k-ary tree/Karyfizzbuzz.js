'use strict';

const Queue = require('../../stack-and-queue/queue/queue');


function fizzBuzz(value) {
    if (value % 3 === 0) {
        if (value % 5 === 0) {
            value = "FizzBuzz"
        } else {
            value = "Fizz"
        }
    } else if (value % 5 === 0) {
        value = "Buzz"
    } else {
        value = value.toString();
    }
    return value
}

function fizzBuzzTree(karytree) {
    if (!karytree.root) return 'Empty karytree';
    const queue = new Queue()
    queue.enqueue(karytree.root);
    let result = [];
    const _recursion = (node) => {
        let newValue = fizzBuzz(node.value);
        result.push(newValue);
        for (let i = 0; i < node.child.length; i++) {
            if (node.child[i]) queue.enqueue(node.child[i]);
        }
        if (!queue.isEmpty()) _recursion(queue.dequeue());
    };
    _recursion(queue.dequeue());
    return result;
}


module.exports = fizzBuzzTree;