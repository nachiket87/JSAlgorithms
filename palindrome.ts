/*Write an efficient function that
checks whether any permutation of an input string is a palindrome.*/

const pali: string = 'civic';
const nopali: string = 'what';


const isPalindrome = (word: string) => {
  const wordArray: string[] = word.split("");
  let charSet: Set<string> = new Set();
  wordArray.forEach((char: string) => {
    if(charSet.has(char)){
      charSet.delete(char);
    } else {
      charSet.add(char);
    }
  })
  return charSet.size <= 1;
}


const x = isPalindrome(pali);

console.log(x);

