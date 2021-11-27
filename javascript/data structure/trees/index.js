'use strict';

const Node = require('./lib/Node');
const BinarySearchTree = require('./binary search tree/binary_Search_Tree');
const BinaryTree = require('./binary tree/binary_Tree');

const BST = new BinarySearchTree();

BST.add(10)
BST.add(8);
BST.add(13);
BST.add(7);
BST.add(9);
BST.add(12);
BST.add(16);

function sumOfOdd(newBST) {
    if (newBST.length === 0) return "Empty Tree !"
    let bStValues = newBST.preOrder();
    let oddSums = 0;
    bStValues.forEach(elem => {
        if (elem % 2 !== 0) {
            oddSums += Number(elem);
        }
    });
    return oddSums;
}

console.log(sumOfOdd(BST));

////////////////////////////////////////////////////////////////////////////////////////////////////

const BT = new BinaryTree();

let newnode = new Node(12);
BT.root = newnode;
let leftValue = new Node(8);
let rightValue = new Node(14);
BT.root.left = leftValue;
BT.root.right = rightValue;
BT.root.left.left = new Node(10);
BT.root.left.right = new Node(7);
BT.root.right.left = new Node(4);
// BT.root.right.right = new Node(16);



function compareFiles(firstBT, secondBT) {
    let firstBTFiles = 0;
    let secondBTFiles = 0;
    const _recursion = (node) => {
        if (node.left) { _recursion(node.left) } else if (node.right === null) firstBTFiles++;
        if (node.right) { _recursion(node.right) } else if (node.left === null) firstBTFiles++;
    }
    _recursion(firstBT.root);
    const _recursion2 = (node) => {
        if (node.left) { _recursion2(node.left) } else if (node.right === null) secondBTFiles++;
        if (node.right) { _recursion2(node.right) } else if (node.left === null) secondBTFiles++;
    }
    _recursion2(secondBT.root);
    if (firstBTFiles === secondBTFiles) { return true; } else return false;
}


console.log(compareFiles(BT, BST));



