'use strict';

const Stack = require('../stack/stack');

function validateBrackets(string) {
    let checkArray = new Stack();
    let clearString = string.replace(/[A-Za-z]/g, "").replace(/\s/g, '').split('');

    clearString.map((elem) => {
        if (elem === '(' || elem === '{' || elem === '[') {
            checkArray.push(elem)
        } else if (elem === ')' && checkArray.peek() === '(') {
            checkArray.pop();
        } else if (elem === '}' && checkArray.peek() === '{') {
            checkArray.pop();
        } else if (elem === ']' && checkArray.peek() === '[') {
            checkArray.pop();
        }
    });
    if (checkArray.isEmpty()) return true;
    return false;
}

module.exports = validateBrackets;

