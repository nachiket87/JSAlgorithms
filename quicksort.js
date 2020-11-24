const a = [3, 4, 1, 7, 5, 19, 11, 21, 14];

const qSort = (array) => {
  if (array.length < 2) {
    return array;
  } else {
    let pivot = array[Math.floor(array.length / 2)];
    let leftArr = [];
    let rightArr = [];
    console.log('pivot: ', pivot);
    array.forEach((item) => {
      if (item < pivot) {
        leftArr.push(item);
      } else if (item > pivot) {
        rightArr.push(item);
      }
    });
    return [...qSort(leftArr), pivot, ...qSort(rightArr)];
  }
};

const quickSort = (array) => {
  if (array.length < 2) return array;
  const pivot = array[0];
  const keysAreLessPivot = array.slice(1).filter((key) => key <= pivot);
  const keysAreMorePivot = array.slice(1).filter((key) => key > pivot);
  return [
    ...quickSort(keysAreLessPivot),
    pivot,
    ...quickSort(keysAreMorePivot),
  ];
};

console.log(qSort(a));

console.log(quickSort(a));
