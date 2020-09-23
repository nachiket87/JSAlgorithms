// this is a poor solution
const st: string = "After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar."

let arrofSt: string[] = st.split(" ");
let setOfSt: Set<string> = new Set(st.split(" "));

let testAnswer: Map<string, number>  = new Map();

arrofSt.forEach((word: string) => {
  if(testAnswer.has(word)){
    testAnswer.set(word, testAnswer.get(word) + 1);
  } else {
    testAnswer.set(word, 1);
  }
})

console.log(testAnswer);

