'use strict';

const LinkedList = require('../lib/linked-list');
let list = new LinkedList();


describe('Linked List', () => {
  it('empty linked list', () => {
    expect(list.head).toEqual(null);
  });
  it('add new node to empty ll', () => {
    list.insert(1);
    expect(list.head.value).toBe(1);
    expect(list.head.next).toBeNull();
  });
  it('add new node to  ll', () => {
    list.insert(2);
    expect(list.head.value).toBe(2);
    expect(list.head.next.value).toBe(1);
    expect(list.head.next.next).toBeNull();
  });
  it('make the linked list  string', () => {
    expect(list.toString()).toBe('{2} -> {1} -> NULL');
  });
});


