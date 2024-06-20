// Arrow Function


// zero parameter
var sum = () => {

}


// one parameter
sum = (a) => {

}

// more than one parameter

sum = (a, b) => {}

// if one line statement inside the function and value needs to be rturned then no use on return keyword

sum = (a,b) => a + b;

console.log(sum(3, 5));


// ****** Arrow function does not have this keyword **** //
this.name = 'Shaym';

var obj = {
    name: 'Ram',
    // show: function() {
    //     console.log(this.name);
    // },
    show: () => {
        console.log(this.name);
    }
}

obj.show();

// bind call apply will not work with arrow function

var newObj = {
    name: 'Rakesh'
}
obj.show.call(newObj);