


const PseudoQueue = require('./stack-queue-pseudo/stack-queue-pseudo');

let newPseudoQueue = new PseudoQueue();

newPseudoQueue.enqueue(10);
newPseudoQueue.enqueue(11);
newPseudoQueue.enqueue(12);
newPseudoQueue.enqueue(13);
newPseudoQueue.enqueue(14);
newPseudoQueue.enqueue(15);
console.log(newPseudoQueue);
let value=newPseudoQueue.dequeue();
let value2=newPseudoQueue.dequeue();
let value3=newPseudoQueue.dequeue();

console.log('===============================')
console.log(value)
console.log('===============================')
console.log(value2);
console.log('===============================')
console.log(value3);
console.log('===============================')
console.log(newPseudoQueue);

