"use strict";
// merge sored arrays 
const mergeArrays = (herArray, myArray) => {
    const mergedArray = [];
    let currentIndexHer = 0;
    let currentIndexMine = 0;
    let currentmergedIndex = 0;
    while (currentmergedIndex < (herArray.length + myArray.length)) {
        // final array is going to by the combined length of both the arrays.
        if (currentIndexMine >= myArray.length) {
            mergedArray[currentmergedIndex] = herArray[currentIndexHer];
            currentIndexHer++; // check if my array is exhausted, then add hers
        }
        else if (currentIndexHer >= herArray.length) {
            mergedArray[currentmergedIndex] = myArray[currentIndexMine];
            currentIndexMine++; // if her array is exhausted add mine
        }
        else if (herArray[currentIndexHer] < myArray[currentIndexMine]) {
            mergedArray[currentmergedIndex] = herArray[currentIndexHer];
            currentIndexHer++; //compare and add the smaller number at the current indexes
        }
        else {
            mergedArray[currentmergedIndex] = myArray[currentIndexMine];
            currentIndexMine++; // if hers aren't smaller, then add mine to merged array
        }
        currentmergedIndex++; // always increase merged array index counter. 
    }
    return mergedArray;
};
const alicesArray = [1, 5, 8, 12, 14, 19];
const myArray = [3, 4, 6, 10, 11, 15];
console.log(mergeArrays(alicesArray, myArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
