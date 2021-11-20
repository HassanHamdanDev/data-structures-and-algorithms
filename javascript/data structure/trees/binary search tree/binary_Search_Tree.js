'use strict';

const Node = require('../lib/Node');


class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
        this.length = 0;
    }
    add(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            this.length++;
        }

        const _recursion = (node) => {
            if (value < node.value) {
                if (node.left === null) {
                    node.left = newNode;
                    this.length++;
                }
                _recursion(node.left);
            } else if (value > node.value) {
                if (node.right === null) {
                    node.right = newNode;
                    this.length++;
                }
                _recursion(node.right);
            }
        };
        _recursion(this.root);
    }
    contains(value) {
        if (this.length === 0) return "Empty Tree !"
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return true;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
}

module.exports = BinarySearchTree;
