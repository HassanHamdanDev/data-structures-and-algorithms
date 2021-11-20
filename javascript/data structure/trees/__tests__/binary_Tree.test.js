'use strict';

const Node = require('../lib/Node');
const BinaryTree = require('../binary tree/binary_Tree');

const BT = new BinaryTree();

describe('Binary Tree Test', () => {
    it(' Can successfully instantiate an empty tree', () => {
        expect(BT.length).toEqual(0);
        expect(BT.root).toBeNull();
        expect(BT.preOrder()).toBe("The Binary Tree is Empty !");
        expect(BT.preOrder()).toBe("The Binary Tree is Empty !");
        expect(BT.preOrder()).toBe("The Binary Tree is Empty !");
    });
    it(' Can successfully instantiate a tree with a single root node', () => {
        let newnode = new Node(12);
        BT.root = newnode;
        expect(BT.root.value).toBe(12);
        expect(BT.root.right).toBeNull();
        expect(BT.root.left).toBeNull();
    });
    it(' Can successfully add a left child and right child to a single root node', () => {
        let leftValue = new Node(8);
        let rightValue = new Node(14);
        BT.root.left = leftValue;
        BT.root.right = rightValue;
        expect(BT.root.left.value).toEqual(8);
        expect(BT.root.right.value).toEqual(14);
    });
    it(' Can successfully return a collection from a preorder traversal', () => {
        BT.root.left.left = new Node(10);
        BT.root.left.right = new Node(7);
        BT.root.right.left = new Node(4);
        BT.root.right.right = new Node(16);
        let preOrder = BT.preOrder();
        expect(preOrder).toEqual([12, 8, 10, 7, 14, 4, 16]);
    });
    it(' Can successfully return a collection from an inorder traversal', () => {
        let inOrder = BT.inOrder();
        expect(inOrder).toEqual([10, 8, 7, 12, 4, 14, 16]);
    });
    it(' Can successfully return a collection from an postOrder traversal', () => {
        let postOrder = BT.postOrder();
        expect(postOrder).toEqual([10, 7, 8, 4, 16, 14, 12]);
    });
});
