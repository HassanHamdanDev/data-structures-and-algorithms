'use strict';

const Node = require('../k-ary tree/lib/Node');
const KaryTree = require('../k-ary tree/k-ary-tree');
const fizzBuzzTree = require('../k-ary tree/Karyfizzbuzz');

describe('fizzBuzzTree test', () => {

    const one = new Node(1, 3);
    const two = new Node(2, 3);
    const three = new Node(3, 3);
    const four = new Node(4, 3);
    const five = new Node(5, 3);
    const six = new Node(6, 3);
    const seven = new Node(7, 3);
    const eight = new Node(8, 3);
    const nine = new Node(9, 3);
    const ten = new Node(10, 3);
    const fifteen = new Node(15, 3);
    const thirty = new Node(30, 3);

    one.child[0] = two;
    one.child[1] = three;
    one.child[2] = four;
    two.child[0] = five;
    two.child[1] = six;
    two.child[2] = seven;
    three.child[0] = eight;
    three.child[1] = nine;
    four.child[0] = ten;
    four.child[1] = fifteen;
    fifteen.child[0] = thirty;
    let karytree = new KaryTree(one);

    it('change the KaryTree to fizzBuzzTree', () => {
        let output = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', 'FizzBuzz', 'FizzBuzz'];
        expect(fizzBuzzTree(karytree)).toEqual(output);
    });
});
