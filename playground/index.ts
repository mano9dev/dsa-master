const huge = {
  name: 'Want huge baby',
  girlfriend: {
    name: 'M',
    age: 22,
  },
};

const huger = { ...huge };

huge.girlfriend.name = 'H';

console.log(huger.girlfriend.name);

let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
