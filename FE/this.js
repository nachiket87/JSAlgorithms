const person = {
  name: 'Nachiket',
  saymyName() {
    console.log(`My name is ${this.name}`);
  },
};

person.saymyName();
// this keyword takes name
