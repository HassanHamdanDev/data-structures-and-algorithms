'use strict';

const HashTable = require('../hashtable');
let newHashTable = new HashTable(100);


describe('Hash Tables Testing', () => {
  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    newHashTable.add('cat', 'sabreen');
    expect(newHashTable.contains('cat')).toBeTruthy();
  });
  it('Retrieving based on a key returns the value stored', () => {
    expect(newHashTable.get('cat')).toStrictEqual('sabreen');
  });
  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(newHashTable.get('dog')).toBeNull();
    expect(newHashTable.contains('dog')).toBeFalsy();
  });
  it('Successfully handle a collision within the hashtable', () => {
    newHashTable.add('Greenwood', '98103');
    newHashTable.add('Belltown', '98121');
    expect(newHashTable.contains('Greenwood')).toBeTruthy();
    expect(newHashTable.contains('Belltown')).toBeTruthy();
  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    expect(newHashTable.get('Greenwood')).toStrictEqual('98103');
    expect(newHashTable.get('Belltown')).toStrictEqual('98121');
  });
  it('Successfully hash a key to an in-range value', () => { });
  let testKey = 'Mercer Island';
  expect(newHashTable.getHash(testKey)).toBeLessThanOrEqual(100);
});


