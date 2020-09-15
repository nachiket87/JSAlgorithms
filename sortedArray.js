var mergeArrays = function (herArray, myArray) {
    var mergedArray = [];
    var currentIndexHer = 0;
    var currentIndexMine = 0;
    var currentmergedIndex = 0;
    while (currentmergedIndex < (herArray.length + myArray.length)) {
        if (currentIndexMine >= myArray.length) {
            mergedArray[currentmergedIndex] = herArray[currentIndexHer];
            currentIndexHer++;
        }
        else if (currentIndexHer >= herArray.length) {
            mergedArray[currentmergedIndex] = myArray[currentIndexMine];
            currentIndexMine++;
        }
        else if (herArray[currentIndexHer] < myArray[currentIndexMine]) {
            mergedArray[currentmergedIndex] = herArray[currentIndexHer];
            currentIndexHer++;
        }
        else {
            mergedArray[currentmergedIndex] = myArray[currentIndexMine];
            currentIndexMine++;
        }
        currentmergedIndex++;
    }
    return mergedArray;
};
var alicesArray = [1, 5, 8, 12, 14, 19];
var myArray = [3, 4, 6, 10, 11, 15];
console.log(mergeArrays(alicesArray, myArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
