'use strict';

class BinaryTree {
    constructor(root = null) {
        this.root = root;
        this.length =0;
    }

    preOrder() {
        if (this.isEmpty()) return "The Binary Tree is Empty !"
        let bTRead = [];
        const _recursion = (node) => {
            bTRead.push(node.value); //read
            if (node.left) { _recursion(node.left) } // check left
            if (node.right) { _recursion(node.right) } // check right
        }
        _recursion(this.root);
        return bTRead;
    }

    postOrder() {
        if (this.isEmpty()) return "The Binary Tree is Empty !"
        let bTRead = [];
        const _recursion = (node) => {
            if (node.left) { _recursion(node.left) } // check left
            if (node.right) { _recursion(node.right) } // check right
            bTRead.push(node.value); //read
        }
        _recursion(this.root);
        return bTRead;
    }

    inOrder() {
        if (this.isEmpty()) return "The Binary Tree is Empty !"
        let bTRead = [];
        const _recursion = (node) => {
            if (node.left) { _recursion(node.left) } // check left
            bTRead.push(node.value); //read
            if (node.right) { _recursion(node.right) } // check right
        }
        _recursion(this.root);
        return bTRead;
    }

    isEmpty() {
        return this.root === null;
    }
}

module.exports = BinaryTree;
