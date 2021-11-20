'use strict';

const validateBrackets = require('../stack-queue-brackets/stack-queue-brackets');

describe('test validateBrackets ', () => {
    it('if return true', () => {
        expect(validateBrackets('{}')).toBeTruthy();
        expect(validateBrackets('{}(){}')).toBeTruthy();
        expect(validateBrackets('()[[Extra Characters]]')).toBeTruthy();
        expect(validateBrackets('(){}[[]]')).toBeTruthy();
        expect(validateBrackets('{}{Code}[Fellows](())')).toBeTruthy();
    });
    it('if return false ', () => {
        expect(validateBrackets(')(')).toBeFalsy();
        expect(validateBrackets('[({}]')).toBeFalsy();
        expect(validateBrackets('(](')).toBeFalsy();
    });
});