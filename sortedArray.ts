const mergeArrays = (herArray: Array<number>, myArray: Array<number>) => {
  const mergedArray: Array<number> = [];

  let currentIndexHer: number = 0;
  let currentIndexMine: number = 0;
  let currentmergedIndex: number = 0;

  while(currentmergedIndex < (herArray.length + myArray.length)) {

    if(currentIndexMine >= myArray.length){
      mergedArray[currentmergedIndex] = herArray[currentIndexHer];
      currentIndexHer++;
    } else if (currentIndexHer >= herArray.length) {
      mergedArray[currentmergedIndex] = myArray[currentIndexMine];
      currentIndexMine++;
    } else if (herArray[currentIndexHer] < myArray[currentIndexMine]) {
      mergedArray[currentmergedIndex] = herArray[currentIndexHer];
      currentIndexHer++;
    } else {
      mergedArray[currentmergedIndex] = myArray[currentIndexMine];
      currentIndexMine++;
    }
    currentmergedIndex++;
  }
  return mergedArray
}


const alicesArray: Array<number> = [1, 5, 8, 12, 14, 19];
const myArray: Array<number> = [3, 4, 6, 10, 11, 15];


console.log(mergeArrays(alicesArray, myArray));

// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
