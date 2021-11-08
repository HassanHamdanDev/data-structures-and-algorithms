'use strict';

const LinkedList = require('../lib/linked-list');
let list = new LinkedList();
let newList = new LinkedList();


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
  it('check if the LL contain specific Value', () => {
    expect(list.includes(2)).toBe(true);
    expect(list.includes(3)).toBe(false);
    expect(newList.includes(3)).toBe('empty LL');
  });
  it('make the linked list  string', () => {
    expect(list.toString()).toBe('{ 2 } -> { 1 } -> NULL');
  });
});

describe('linked-list-insertions', () => {
  it(' append new node to empty ll', () => {
    newList.append(1);
    expect(newList.head.value).toBe(1);
    expect(newList.head.next).toBeNull();
  });
  it(' append new node to the end of ll', () => {
    newList.append(2);
    expect(newList.head.value).toBe(1);
    expect(newList.head.next.value).toBe(2);
    expect(newList.head.next.next).toBeNull();
  });
  it(' add a value before the value in the ll', () => {
    expect(newList.toString()).toBe('{ 1 } -> { 2 } -> NULL');
    newList.insertBefore(1, 3);
    expect(newList.toString()).toBe('{ 3 } -> { 1 } -> { 2 } -> NULL');
    newList.insertBefore(2, 4);
    expect(newList.toString()).toBe('{ 3 } -> { 1 } -> { 4 } -> { 2 } -> NULL');
    newList.insertBefore(4, 5);
    expect(newList.toString()).toBe('{ 3 } -> { 1 } -> { 5 } -> { 4 } -> { 2 } -> NULL');
    expect(newList.insertBefore(9, 20)).toBe('value not exist');
  });
  it(' add a value after value in the ll', () => {
    newList.insertAfter(3, 10);
    expect(newList.toString()).toBe('{ 3 } -> { 10 } -> { 1 } -> { 5 } -> { 4 } -> { 2 } -> NULL');
    newList.insertAfter(2, 11);
    expect(newList.toString()).toBe('{ 3 } -> { 10 } -> { 1 } -> { 5 } -> { 4 } -> { 2 } -> { 11 } -> NULL');
    newList.insertAfter(5, 12);
    expect(newList.toString()).toBe('{ 3 } -> { 10 } -> { 1 } -> { 5 } -> { 12 } -> { 4 } -> { 2 } -> { 11 } -> NULL');
    expect(newList.insertAfter(15, 15)).toBe('value not exist');
  });
});

describe('kFromEnd', () => {
  it(' find k value in a ll', () => {
    expect(newList.kthFromEnd(0)).toEqual(11);
    expect(newList.kthFromEnd(1)).toEqual(2);
    expect(newList.kthFromEnd(2)).toEqual(4);
    expect(newList.kthFromEnd(7)).toEqual(3);
  });
  it('find k value in a LL of a size 1', () => {
    let testList = new LinkedList();
    testList.append(3);
    expect(testList.kthFromEnd(0)).toEqual(3);
    expect(testList.kthFromEnd(1)).toEqual('Exception empty LL or more than the length');
  });
  it('Exception if the value is not valid', () => {
    expect(newList.kthFromEnd(1.7)).toEqual('Exception not valid Number');
    expect(newList.kthFromEnd(-1)).toEqual('Exception not valid Number');
  });
  it('Exception if the value is more than the length ', () => {
    expect(newList.kthFromEnd(12)).toEqual('Exception empty LL or more than the length');
  });
});



