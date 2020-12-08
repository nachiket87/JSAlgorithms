function sum(a, b, c) {
  return a + b + c;
}

function sub(a, b, c) {
  return c - b - a;
}
function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
const curriedSum2 = curry(sub);

//console.log(curriedSum(2)(3)(5));
//console.log(curriedSum2(2)(3)(5));

// This keyword implicitly

const person = {
  name: 'Nachiket',
  saymyName() {
    console.log(`My name is ${this.name}`);
  },
};

person.saymyName();
// this keyword takes name
