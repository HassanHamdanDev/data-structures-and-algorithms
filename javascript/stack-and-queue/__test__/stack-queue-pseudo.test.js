'use strict';

const PseudoQueue = require('../stack-queue-pseudo/stack-queue-pseudo');
const newPseudoQueue = new PseudoQueue();

describe('PseudoQueue Test', () => {
    it('Check if PseudoQueue empty', () => {
        expect(newPseudoQueue.length).toEqual(0);
        expect(newPseudoQueue.rear.isEmpty()).toBeTruthy();
    });
    it('enqueue to empty PseudoQueue', () => {
        let value = 23;
        newPseudoQueue.enqueue(value);
        expect(newPseudoQueue.rear.peek()).toBe(value);
    });
    it('dequeue from PseudoQueue', () => {
        let value2 = 45;
        newPseudoQueue.enqueue(value2);
        expect(newPseudoQueue.dequeue()).toEqual(45);
    });
});








