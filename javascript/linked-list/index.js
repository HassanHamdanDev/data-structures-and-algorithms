'use strict';

const LinkedList = require('./lib/linked-list');

const linkedList = new LinkedList();

linkedList.insert(1);
linkedList.insert(2);
linkedList.insertBefore(2, 6);
linkedList.insertBefore(1, 5);
linkedList.insertBefore(2, 4);
linkedList.insertAfter(6, 3);
linkedList.insertAfter(1, 8);
linkedList.insertAfter(5, 7);
let valueof = linkedList.kthFromEnd();
let check2 = linkedList.includes(1);
let check3 = linkedList.includes(11);
let llString = linkedList.toString();

console.log(linkedList, check2, check3, llString, `value : ${valueof} `,` length: ${linkedList.length}`);

