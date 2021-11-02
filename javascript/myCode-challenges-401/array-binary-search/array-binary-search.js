'use strict';

module.exports = function insertShiftArray(array, value) {
    let newArray = [];
    let middleIndex = Math.ceil(array.length / 2);
    for (let i = 0; i < middleIndex; i++) {
        newArray[i] = array[i];
    }
    newArray[middleIndex] = value;
    for (let k = middleIndex; k < array.length; k++) {
        newArray[k + 1] = array[k];
    }
    return newArray;
};