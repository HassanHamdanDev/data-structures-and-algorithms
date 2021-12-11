'use strict';

const LinkedList = require('./lib/linked-list');

class HashTable {

    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    getHash(key) {
        const assciMulti = key.split('').reduce((p, n) => p * n.charCodeAt(0), 0);
        const withPrime = assciMulti * 599;
        return withPrime % this.size;
    }

    add(key, value) {
        const index = this.getHash(key);
        const bucket = { [key]: value };
        if (!this.table[index]) {
            this.table[index] = new LinkedList();
        }
        this.table[index].append(bucket)
    }

    get(key) {
        const index = this.getHash(key);
        if (this.table[index]) {
            let current = this.table[index].head
            while (current) {
                if (current.value[key]) {
                    return current.value[key]
                }
                current = current.next
            }
        }
        return null;
    }

    contains(key) {
        let index = this.getHash(key)
        if (this.table[index]) {
            let current = this.table[index].head
            while (current) {
                if (current.value[key]) {
                    return true
                }
                current = current.next
            }
        }
        return false;
    }
}


module.exports = HashTable;
