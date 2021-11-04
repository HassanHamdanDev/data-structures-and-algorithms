'use strict';

const LinkedList = require('./lib/linked-list');

const linkedList = new LinkedList(); 

linkedList.insert(1);
linkedList.insert(2);
let check2 = linkedList.includes(1);
let check3 = linkedList.includes(3);
let llString = linkedList.toString();

console.log(linkedList, check2, check3, llString);