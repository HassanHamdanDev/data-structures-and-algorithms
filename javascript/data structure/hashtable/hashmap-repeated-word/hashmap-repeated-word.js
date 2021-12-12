'use strict';

const HashTable = require('../hashtable');

function repeatedWord(str) {
    let strArray = str.toLowerCase().match(/\w+/g);

    const strHashMap = new HashTable(strArray.length);

    for (let i = 0; i < strArray.length; i++) {
        if (strHashMap.contains(strArray[i])) {
            return strArray[i];
        }
        strHashMap.add(strArray[i], strArray[i]);
    }
    return 'No Repeated Word';
}

module.exports = repeatedWord;