//implicit binding
/*const person = {
  name: 'Nachiket',
  saymyName() {
    console.log(`My name is ${this.name}`);
  },
};

person.saymyName();
// this keyword takes name */

const person = {
  name: 'Nachiket',
};
const superHero = {
  heroname: 'Batman',
};

function saymyName(last) {
  console.log(`My name is ${this.name} and superhero name is ${last}`);
}

//const sayNachiName = saymyName.bind(superHero);
// binding will let this keyword know what the context is

function bind(fn, context) {
  return function () {
    fn.apply(context, [...arguments]);
  };
}

boundFn = bind(saymyName, person);

boundFn('Batman');
