'use strict';

const Stack = require('../stack/stack');

function validateBrackets(string) {
    let checkArray = new Stack();
    let allBrackets = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    let clearString = string.replace(/[A-Za-z]/g, "").replace(/\s/g, '').split('');
    clearString.map(elem => {
        if (elem === '(' || elem === '{' || elem === '[') {
            checkArray.push(elem)
        } else {
            let lastElem = checkArray.pop();
            if (elem !== allBrackets[lastElem]) return false;
        }
    });
    if (checkArray.length !== 0) return false;
    return true;
}

module.exports = validateBrackets;

