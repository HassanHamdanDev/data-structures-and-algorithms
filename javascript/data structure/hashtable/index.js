'use strict';

const HashTable = require('./hashtable');


const repeatedWord = require('./hashmap-repeated-word/hashmap-repeated-word');

let stringOne = "Once upon a time, there was a brave princess who...";
let stringTwo = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
let stringThree = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
let stringFour = "saber w rathe 3lee nasene wro7e feeh";

let try1 = repeatedWord(stringOne);
let try2 = repeatedWord(stringTwo);
let try3 = repeatedWord(stringThree);
let try4 = repeatedWord(stringFour);

console.log(try1);
console.log(try2);
console.log(try3);
console.log(try4);

let stringFive = 'In a galaxy far far away';
let stringsix = 'Taco cat ate a taco';
let stringseven = 'No. Try not. Do or do not. There is no try.';

function mostWord(str) {
    let strArray = str.toLowerCase().match(/\w+/g);
    const strHashMap = new HashTable(strArray.length);

    let counter = 1;
    let mostCommon;
    let tempCount = 0;

    for (let i = 0; i < strArray.length; i++) {
        if (strHashMap.contains(strArray[i])) {
            strHashMap.add(strArray[i], counter++);
            if (Number(strHashMap.get(strArray[i])) >= tempCount) {
                tempCount = Number(strHashMap.get(strArray[i]).tail)
                mostCommon = strArray[i];
            }
        }
        strHashMap.add(strArray[i], counter);
    }
    return mostCommon ? mostCommon : 'No common Words';
}

console.log(mostWord(stringFive));
console.log(mostWord(stringsix));
console.log(mostWord(stringseven));
console.log(mostWord(stringFour));

function uniqueChar(str) {
    let strArray = str.toLowerCase().replace(/[ ,.]/g, '').split('');

    const strHashMap = new HashTable(strArray.length);
    for (let i = 0; i < strArray.length; i++) {
        if (strHashMap.contains(strArray[i])) {
            return false;
        }
        strHashMap.add(strArray[i], strArray[i]);
    }
    return true;
}

console.log(uniqueChar('Donald the duck'))

