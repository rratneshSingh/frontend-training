const a = new Number(1);

console.log(a);

const b = 1;
const c = 1;

console.log(b);

console.log(a === b);
console.log(b === c);

console.log(a.toString());
console.log(2..toString());
console.log('str'.charAt(0));

// So the following code

let language = 'JavaScript';
let str = language.substring(4);
// Code language: JavaScript (javascript)
// is technically equivalent to the following code:

// behind the scenes of the language.substring(4);
let tmp = new String(language);
str = temp.substring(4);
temp = null;