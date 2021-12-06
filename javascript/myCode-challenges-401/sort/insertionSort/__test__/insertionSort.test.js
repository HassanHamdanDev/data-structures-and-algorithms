'use strict';

const insertionSort = require('../insertionSort');

describe("Insertion Sort", () => {
    test(" sort an array", () => {
        const newArray = [8, 4, 23, 42, 16, 15];
        expect(insertionSort(newArray)).toStrictEqual([4, 8, 15, 16, 23, 42]);
    });

    test("Reverse-sorted Array", () => {
        const newArray1 = [20, 18, 12, 8, 5, -2];
        expect(insertionSort(newArray1)).toStrictEqual([-2, 5, 8, 12, 18, 20]);
    });

    test("Few uniques array", () => {
        const newArray2 = [5, 12, 7, 5, 5, 7];
        expect(insertionSort(newArray2)).toStrictEqual([5, 5, 5, 7, 7, 12]);
    });

    test("Nearly-sorted array", () => {
        const newArray3 = [2, 3, 5, 7, 13, 11];
        expect(insertionSort(newArray3)).toStrictEqual([2, 3, 5, 7, 11, 13]);
    });
});
