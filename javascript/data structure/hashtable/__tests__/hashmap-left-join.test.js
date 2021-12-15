'use strict';

const HashTable = require('../hashtable');

const leftJoin = require('../hashmap-left-join/hashmap-left-join');


let table = new HashTable(1000);
table.add("fond", "enamored");
table.add("wrath", "anger");
table.add("diligent", "employed");
table.add("outfil", "garb");
table.add("guide", "usher");

let table2 = new HashTable(400);
table2.add("fond", "averse");
table2.add("wrath", "delight");
table2.add("diligent", "idle");
table2.add("guide", "follow");
table2.add("flow", "jam");


describe('leftJoin test', () => {
    it('all the values in the first hashmap are returned, and if values exist in the “right” hashmap ', () => {
        expect(leftJoin(table, table2)).toStrictEqual([
            ['guide', 'usher', 'follow'],
            ['fond', 'enamored', 'averse'],
            ['wrath', 'anger', 'delight'],
            ['outfil', 'garb', null],
            ['diligent', 'employed', 'idle']
        ]);
    });
});
