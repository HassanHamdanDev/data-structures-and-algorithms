'use strict';


const AnimalAhelter = require('../stack-queue-animal-shelter/stack-queue-animal-shelter');
const newAnimalAhelter = new AnimalAhelter();


describe('test AnimalAhelter', () => {
    it('add to AnimalAhelter', () => {
        const catAnimalAhelter = { name: 'sabreen', kind: 'cat', age: 2 };
        const dogAnimalAhelter = { name: 'mj7em', kind: 'dog', age: 4 };
        newAnimalAhelter.enqueue(catAnimalAhelter);
        expect(newAnimalAhelter.length).toEqual(1);
        newAnimalAhelter.enqueue(dogAnimalAhelter);
        expect(newAnimalAhelter.enqueue({ name: 'fojel', kind: 'fojel', age: 2 })).toEqual('the shelter only for cats or dogs');
    })
    it('enqueue from AnimalAhelter', () => {
        newAnimalAhelter.enqueue({ name: 'saber', kind: 'dog', age: 3 });
        expect(newAnimalAhelter.dequeue('cat')).toEqual({ name: 'sabreen', kind: 'cat', age: 2 })
        newAnimalAhelter.dequeue('cat');
        expect(newAnimalAhelter.dequeue('cat')).toEqual('The queue is Empty');
        newAnimalAhelter.dequeue('dog');
        newAnimalAhelter.dequeue('dog');
        expect(newAnimalAhelter.dequeue('dog')).toEqual('empty no animal found');
    });
});