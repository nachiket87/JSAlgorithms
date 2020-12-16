const list_of_chars = ['A', 'B', 'C', 'D', 'E'];
const expected = ['E', 'D', 'C', 'B', 'A'];
console.log(list_of_chars);

const r = (arr) => {
  let firstIndex = 0;
  let secondIndex = list_of_chars.length - 1;
  while (firstIndex < secondIndex) {
    const temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
    firstIndex++;
    secondIndex--;
  }
  return [...arr];
};

r(list_of_chars);
console.log(list_of_chars);
