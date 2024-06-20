// let or Const vs Var

// 1. hoisting: var is hoisted, let and const are not hoisted

console.log('a', a);
// console.log('b', b);
// console.log('c', c);

var a = 10;
let b = 10;
const c = 10;

console.log('a', a);
console.log('b', b);
console.log('c', c);

// 2. var is functional scope, let and const is block scope

if (true) {
    var d = 10;
    let e = 10;
    const f = 10;
}

console.log('d', d);
// console.log('e', e);
// console.log('f', e);

function fn() { 
    var g = 10;
    let h = 10;
}

fn();

// console.log('g', g);
// console.log('h', h);

// let vs const

// 1. const does not allow reassignment

let i = 10;
const j = 10;

i = 11;
j = 11;