Sum();
var a = 10;

function Sum() {
    console.log(s); // undefined
    var s = 5;
    console.log(s + 10); // 15
    console.log(a); // undefined
}

// console.log(s);
console.log(a);