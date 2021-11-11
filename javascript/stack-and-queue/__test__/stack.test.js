
'use strict';

const Stack  = require('../stack/stack');
const newStack = new Stack();

describe('stack test', () => {
    it('empty stack', () => {
        expect(newStack.top).toBeNull();
    });
    it('isempty work true', () => {
        expect(newStack.isEmpty()).toBeTruthy();
    });
    it('push test', () => {
        let value = 10;
        newStack.push(value);
        expect(newStack.top.value).toEqual(value);
    });
    it('pop test', () => {
        let value = 20;
        newStack.push(value);
        expect(newStack.top.value).toEqual(value);
        expect(newStack.pop()).toEqual(value);
    });
    it('peek test', () => {
        expect(newStack.peek()).toEqual(10);
    });
    it('isempty work false', () => {
        expect(newStack.isEmpty()).toBeFalsy();
    });
    it('pop empty stack', () => {
        newStack.pop();
        expect(newStack.pop()).toBe('The stack is Empty');
    });
    it('peek empty stack', () => {
        expect(newStack.peek()).toBe('The stack is Empty');
    });
});
