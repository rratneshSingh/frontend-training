// Creating Object Example 1

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var person = new Person('Ratnesh', 'Singh');
var res = Person();

console.log(person);
console.log(res);
console.log(person.constructor);

// Creating Object Example 2

// Object Literal
var car = {
    color: 'red',
    gear: 4
}
console.log(car);
console.log(car.constructor);

// Craeting Object using Object function

var shirt = new Object();
console.log(shirt);


// Adding properties to object

var obj = {
    name: 'Shyam'
};

console.log(obj);

obj.age = 9;

console.log(obj);

var key = 'addr';
obj[key] = 'Goa';

console.log(obj);

// Deleting a property

delete obj.age;

console.log(obj);