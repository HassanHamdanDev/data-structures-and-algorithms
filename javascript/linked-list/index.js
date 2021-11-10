'use strict';

const LinkedList = require('./lib/linked-list');

const linkedList = new LinkedList();
const linkedList2 = new LinkedList();
const linkedList3 = new LinkedList();


linkedList.insert(1);
linkedList.insert(2);
linkedList.insertBefore(2, 6);
linkedList.insertBefore(1, 5);
linkedList.insertBefore(2, 4);
linkedList.insertAfter(6, 3);
linkedList.insertAfter(1, 8);
linkedList.insertAfter(5, 7);
linkedList.append(9);
linkedList.append(10);
let valueof = linkedList.kthFromEnd(0);
let check2 = linkedList.includes(1);
let check3 = linkedList.includes(11);
let llString = linkedList.toString();



function zipLists(list1, list2) {
    let zippedLL = new LinkedList();
    let counter = 0;
    if (!list1.head) return list2;
    if (!list2.head) return list1;
    if (list1.length > list2.length) { counter = list1.length - 1 } else { counter = list2.length - 1 }
    zippedLL.append(list1.head.value);
    zippedLL.append(list2.head.value);
    let currentlist1 = list1.head;
    let currentlist2 = list2.head;

    while (counter > 0) {
        if (currentlist1.next) {
            zippedLL.append(currentlist1.next.value);
            currentlist1 = currentlist1.next;
        }
        if (currentlist2.next) {
            zippedLL.append(currentlist2.next.value);
            currentlist2 = currentlist2.next;
        }
        counter--;
    }
    return zippedLL;
}


function reverseList(list) {
    let reversedLL = new LinkedList();
    if (list.head) {
        let currentNode = list.head;
        for (let i = 0; i < list.length; i++) {
            reversedLL.insert(currentNode.value);
            currentNode = currentNode.next;
        }
        return reversedLL;
    }
    return "Empty LL";
}



linkedList2.append(11);
linkedList2.append(12);
linkedList2.append(13);
linkedList2.append(14);
let llString2 = linkedList2.toString();
let checkZip = zipLists(linkedList, linkedList3);
let reverseListtest = reverseList(linkedList);
let reverseListtest2 = reverseList(linkedList2);

console.log('=========================================');
console.log(llString)
console.log('=========================================');
console.log(reverseListtest.toString());
console.log('=========================================');
console.log(llString2)
console.log('=========================================');
console.log(reverseListtest2.toString());

console.log(linkedList, check2, check3, llString, `value : ${valueof} `, ` length: ${linkedList.length}`);
console.log(llString2)
console.log('=========================================');
console.log(checkZip.toString());
console.log('length :', checkZip.length)
console.log('=========================================');


module.exports = {
    zipLists,
    reverseList
};
