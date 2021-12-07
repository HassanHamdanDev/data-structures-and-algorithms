'use strict';

const quickSort = require('../quickSort');

describe("quickSort", () => {
    test(" quickSort an array", () => {
        const newArray = [8, 4, 23, 42, 16, 15];
        expect(quickSort(newArray, 0, newArray.length - 1)).toStrictEqual([4, 8, 15, 16, 23, 42]);
    });

    test("Reverse-sorted Array", () => {
        const newArray1 = [20, 18, 12, 8, 5, -2];
        expect(quickSort(newArray1, 0, newArray1.length - 1)).toStrictEqual([-2, 5, 8, 12, 18, 20]);
    });

    test("Few uniques array", () => {
        const newArray2 = [5, 12, 7, 5, 5, 7];
        expect(quickSort(newArray2, 0, newArray2.length - 1)).toStrictEqual([5, 5, 5, 7, 7, 12]);
    });

    test("Nearly-sorted array", () => {
        const newArray3 = [2, 3, 5, 7, 13, 11];
        expect(quickSort(newArray3, 0, newArray3.length - 1)).toStrictEqual([2, 3, 5, 7, 11, 13]);
    });
});

