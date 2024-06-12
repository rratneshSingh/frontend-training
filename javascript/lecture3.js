
// sum(5,9);
function sum(a,b) {
    var s = 0;
    s = a + b; // undefined + undefined = NaN (not a number)
    console.log(s);
}

// console.log(typeof NaN);


// Example 2

// print();

function print() {
    console.log(a); // ref error: a is not defined
}

// Example 3

// no error if strict mode not used
// error if strict mode is used

// print1()

function print1() {
    a = 10;
} 

console.log(a);

// Example 4

var a = 5;
// print2();
function print2() {
    a = 11;
    console.log(a);
}
// console.log(a);

// Example 5

var a = 7;
print3();

function print3() {
    var a = 10;

    function print4() {
        a = 5;
        console.log(a);
    }
    print4();
    console.log(a);
}

console.log(a);
print4();