const reverseString = (str: Array<string>) => {
  let leftIndex: number = 0;
  let rightIndex: number = str.length - 1;
  while(leftIndex < rightIndex){
    const temp: string = str[leftIndex];
    // save the current index in temp;
    str[leftIndex] = str[rightIndex];
    str[rightIndex] = temp;
    // change indexes
    leftIndex++;
    rightIndex++;
  }
  return str;
} 

const str = 'nachiket';
const strChars = str.split("");

reverseString(strChars);

