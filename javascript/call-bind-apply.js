// call : first Arg: this


function Person(name, age) {
    this.name = name;
    this.age = age;
}

var person = {
    addr: 'Goa'
}

// call this-> person, name: 'Rakesh', age: 34, Person()
// Person.call(person, 'Rakesh', 34); 


// apply this ->  person, arguments ko array me leta h , and Person()
// Person.apply(person, ['Rakesh', 34]);
// console.log(person);


// bind this -> person, name: 'Rakesh', age: 34, return Modifined Person function
// var fn = Person.bind(person, 'Rakesh', 34);
// console.log(person);
// fn();
// console.log(person);

// Questions
// https://dmitripavlutin.com/javascript-this-interview-questions/