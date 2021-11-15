'use strict';

const Queue = require('../queue/queue');


class AnimalAhelter {
    constructor() {
        this.cats = new Queue();
        this.dogs = new Queue();
        this.length = 0;
    }
    enqueue(animal) {
        if (animal.kind === 'cat') {
            this.cats.enqueue(animal);
            this.length++;
        } else if (animal.kind === 'dog') {
            this.dogs.enqueue(animal);
            this.length++;
        } else {
            return 'the shelter only for cats or dogs'
        }
    }
    dequeue(pref) {
        if (this.length === 0) return 'empty no animal found';
        if (pref === 'dog') {
            this.length--;
            return this.dogs.dequeue(pref);
        } else if (pref === 'cat') {
            this.length--;
            return this.cats.dequeue(pref);
        } else {
            return null;
        }
    }
}

module.exports = AnimalAhelter;