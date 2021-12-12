'use strict';

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


