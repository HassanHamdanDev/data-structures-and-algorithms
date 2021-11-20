'use strict';

const Node = require('../lib/Node');
const BinarySearchTree = require('../binary search tree/binary_Search_Tree');

const BST = new BinarySearchTree();

describe('Binary Search Tree Test', () => {
    it(' Can successfully instantiate an empty tree', () => {
        expect(BST.length).toEqual(0);
        expect(BST.root).toBeNull();
    });
    it(' Can successfully instantiate a tree with a single root node', () => {
        BST.add(10)
        expect(BST.root.value).toBe(10);
        expect(BST.length).toEqual(1);
        expect(BST.root.right).toBeNull();
        expect(BST.root.left).toBeNull();
    });
    it(' Can successfully add a left child and right child to a single root node', () => {
        BST.add(8);
        BST.add(13);
        BST.add(7);
        BST.add(9);
        BST.add(12);
        BST.add(16);
        expect(BST.length).toEqual(7);
        expect(BST.root.left.value).toEqual(8);
        expect(BST.root.right.value).toEqual(13);
        expect(BST.root.left.left.value).toEqual(7);
        expect(BST.root.left.right.value).toEqual(9);
        expect(BST.root.right.left.value).toEqual(12);
        expect(BST.root.right.right.value).toEqual(16);
    });
    it('can successfully search for a value in the BinarySearchTree', () => {
        expect(BST.contains(10)).toBeTruthy();
        expect(BST.contains(13)).toBeTruthy();
        expect(BST.contains(20)).toBeFalsy();
    });
    it('search in empty BinarySearchTree', () => {
        const newTree = new BinarySearchTree();
        expect(newTree.contains(7)).toBe("Empty Tree !");
    });
});
