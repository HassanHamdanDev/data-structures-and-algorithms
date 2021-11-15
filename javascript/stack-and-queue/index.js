


// const PseudoQueue = require('./stack-queue-pseudo/stack-queue-pseudo');

const AnimalAhelter = require('./stack-queue-animal-shelter/stack-queue-animal-shelter');


// let newPseudoQueue = new PseudoQueue();


// // newPseudoQueue.enqueue(10);
// // newPseudoQueue.enqueue(11);
// // newPseudoQueue.enqueue(12);
// // newPseudoQueue.enqueue(13);
// // newPseudoQueue.enqueue(14);
// // newPseudoQueue.enqueue(15);

// // console.log(newPseudoQueue);

// // let try1 = newPseudoQueue.dequeue();
// // let try2 = newPseudoQueue.dequeue();
// // let try3 = newPseudoQueue.dequeue();


// // console.log('===============================')
// // console.log(try1)
// // console.log('===============================')
// // console.log(try2);
// // console.log('===============================')
// // console.log(try3);
// // console.log('===============================')
// // console.log(newPseudoQueue);




let newAnimalAhelter = new AnimalAhelter();


newAnimalAhelter.enqueue({ name: 'sabreen', kind: 'cat', age: 2 });
newAnimalAhelter.enqueue({ name: 'saber', kind: 'dog', age: 3 });
newAnimalAhelter.enqueue({ name: 'aisha', kind: 'cat', age: 1 });
newAnimalAhelter.enqueue({ name: 'mj7em', kind: 'dog', age: 4 });

console.log(newAnimalAhelter);

let value = newAnimalAhelter.dequeue('dog');
let value2 = newAnimalAhelter.dequeue('cat');
let value3 = newAnimalAhelter.dequeue('fojel');


console.log('===============================')
console.log(value)
console.log('===============================')
console.log(value2);
console.log('===============================')
console.log(value3);
console.log('===============================')
console.log(newAnimalAhelter);


