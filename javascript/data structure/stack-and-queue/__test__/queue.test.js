
'use strict';

const Queue  = require('../queue/queue');
const newQueue = new Queue();


describe('queue test', () => {
    it('empty queue', () => {
        expect(newQueue.front).toBeNull();
    });
    it('isempty work true', () => {
        expect(newQueue.isEmpty()).toBeTruthy();
    });
    it('enqueue test', () => {
        let value = 10;
        newQueue.enqueue(value);
        expect(newQueue.front.value).toEqual(value);
    });
    it('dequeue test', () => {
        let value = 20;
        newQueue.enqueue(value);
        expect(newQueue.front.next.value).toEqual(value);
        expect(newQueue.dequeue()).toEqual(10);
    });
    it('peek test', () => {
        expect(newQueue.peek()).toEqual(20);
    });
    it('isempty work false', () => {
        expect(newQueue.isEmpty()).toBeFalsy();
    });
    it('dequeue empty Queue', () => {
        newQueue.dequeue();
        expect(newQueue.dequeue()).toBe('The queue is Empty');
    });
    it('peek empty queue', () => {
        expect(newQueue.peek()).toBe('The queue is Empty');
    });
});

