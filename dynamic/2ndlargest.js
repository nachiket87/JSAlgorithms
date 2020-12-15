const a = [1, 2, 3, 5, 4, 11, 7, 12, 17, 48, 36, 2, 4, 6, 60];

class Greatest {
  constructor(value = 0) {
    this.value = value;
    this.nextLargest = 0;
  }
}

let largest = new Greatest();

a.forEach((num) => {
  if (num >= largest.value) {
    largest.nextLargest = largest.value;
    largest.value = num;
  } else {
    largest.nextLargest = Math.max(num, largest.nextLargest);
  }
});

console.log(largest.nextLargest);
