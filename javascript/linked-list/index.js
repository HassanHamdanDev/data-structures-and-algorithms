'use strict';

const LinkedList = require('./lib/linked-list');

const linkedList = new LinkedList(); 

linkedList.insert(1);
linkedList.insert(2);
linkedList.insretBefore(2,6);
linkedList.insretBefore(1,5);
linkedList.insretBefore(2,4);
linkedList.insretAfter(6,3);
linkedList.insretAfter(1,8);
linkedList.insretAfter(5,7);
let check2 = linkedList.includes(1);
let check3 = linkedList.includes(11);
let llString = linkedList.toString();

console.log(linkedList, check2, check3, llString,linkedList.length);