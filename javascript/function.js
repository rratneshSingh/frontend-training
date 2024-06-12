// Function are objects they can be used both as objects and functions

var obj1 = new Object();

var obj2 = new Function();

obj2();
obj2.firstName = 'Rakeh';
console.log(obj2.firstName);

function abc() {}

console.log(abc.name);