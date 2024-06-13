function Person(name) {
    this.name = name;
}

Person.prototype.print = function () {
    console.log(this.name);
}

var p1 = new Person('Shyam');
var p2 = new Person('Ram');

console.log(p1);
console.log(p2);

p1.print();
p2.print();

console.log(p1.constructor === p2.constructor);
console.log(p1.print === p2.print);
