var names = ['ratnesh', 'naresh', 'vineet', 'rakesh'];
var cars = new Array(6);
console.log('Cars', cars[4]);

console.log(names[1]);

// removing last element

var lastElement = names.pop();

console.log(names);
console.log(lastElement);

// insert at last

names.push('Shyam', 'Ram');

console.log(names);

names.splice(1,2,'Suresh', 'Ramesh', 'John');

console.log(names);

names[3] = 'Don';

console.log(names);

names.splice(5,0,'Gita');

console.log(names);

console.log(names.length);

names.splice(4,1);

console.log(names);

var removed = names.slice(1, 4);

console.log(removed);

console.log(names);

// loop
for (var i = 0; i < names.length; i++) {
    // console.log(names[i]);
}

for (var item of names) {
    // console.log(item);
}

names.forEach(function(item) {
    console.log(item);
});


Array.prototype.convertToString = function () {
    var str = '';
    for (var item of this) {
        str = str + String(item);
    }
    return str;
}

console.log(names.convertToString());
console.log(cars.convertToString());

// console.log(Array.prototype.push);

Array.prototype.customForEach = function (fn) {
    for (var item of this) {
        fn(item);
    }
}

names.customForEach(function(item) {
    console.log('value', item);
});

Array.prototype.customPop = function () {
    var length = this.length;
    var item = this[length - 1];
    this.length = length - 1;
    return item;
} 

console.log(names.customPop());