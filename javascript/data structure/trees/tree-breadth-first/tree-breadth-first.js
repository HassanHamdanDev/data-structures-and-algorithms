'use strict';

const Queue = require('../../stack-and-queue/queue/queue');

function breadthFirst(tree) {
    if (!tree.root) return "The Binary Tree is Empty !";

    let allValues = [];
    let queue = new Queue();
    queue.enqueue(tree.root);

    while (!queue.isEmpty()) {
        const node = queue.dequeue();
        allValues.push(node.value);
        if (node.left) queue.enqueue(node.left);
        if (node.right) queue.enqueue(node.right);
    }

    return allValues;
}

module.exports = breadthFirst;