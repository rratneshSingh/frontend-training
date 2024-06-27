class Person {

    static ratio = 6;

    name;
    age;
    type = 'human';

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(this.name + ' is talking');
    }

    static walk (name) {
        console.log(name + ' is walking');
    }
}

const p1 = new Person('Ram', 39);
const p2 = new Person('Shyam', 39);

console.log(p1);
console.log(p2);
console.log(Person.ratio);

p1.talk();
p2.talk();
Person.walk('Normal');

// Classes are converted to functions

function Employee(name, age) {
    this.name = name;
    this.age = age;
    this.type = 'human'
}

Employee.prototype.talk = function () {
    console.log(this.name + ' is talking');
}

Employee.ratio = 6;

Employee.walk = function (name) {
    console.log(name + ' is walking');
}

const e1 = new Employee('Naresh', 34);
console.log(e1);
e1.talk();