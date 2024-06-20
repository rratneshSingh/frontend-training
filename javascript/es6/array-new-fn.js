// Array Functions

let arr = [1, 2, 3, 4, 5, 6];

// Mapping
const mappedArr = arr.map((item)=>{
    return item*item;
});
console.log(mappedArr);


// Filtering

const filteredArr = arr.filter((item)=>{
    return item%3 !== 0;
});

console.log(filteredArr);

// Finding
const findedValue = arr.find((item)=>{
    return item%3 === 0;
});

console.log(findedValue);

// Some Check

const some = arr.some((item)=>{
    return item%5 === 0;
})
console.log(some);

// Every Check
let arr1 = [4, 8, 12];
const every = arr1.every((item)=>{
    return item%4 === 0;
});
console.log('Every', every);