// Implicit this binding
function sum() {
    this.name = 'rakesh';
    console.log(this);
}

// 1. normal function call: this -> global object
sum();

// 2. function call with new keyword: object will be created and this -> become that newly created object
var s = new sum();


// 3. if function is called through an object then this becomes that object
var obj3 = {
    name: 'Ramesh',
    show: function() {
        console.log('Line 16:', this);
    },
    addr: {
        print: function() {
            console.log('Line 20:', this);
        },
        city: 'Varanasi'
    }
}

obj3.show();
obj3.addr.print();






// Explicit this binding

var person = {
    age: 29
}

sum.call(person);


// Example

function printAccountNumber () {
    console.log(this.accNo);
}

function SavingAcc(accNo, rate) {
    this.accNo = accNo;
    this.rate = rate;
    // this.printAccountNumber = function () {
    //     console.log(this.accNo);
    // }
}

function CurrentAcc(accNo, charges) {
    this.accNo = accNo;
    this.charges = charges;
    // this.printAccountNumber = function () {
    //     console.log(this.accNo);
    // }
}


var sa = new SavingAcc('123', 7);
// sa.printAccountNumber();
var ca = new CurrentAcc('456', 89);
// ca.printAccountNumber();

printAccountNumber.call(sa);
printAccountNumber.call(ca);


// sum.call(obj) jis function pe call ka use krke functioncall maar gya h us function ka this -> obj ho jaega 