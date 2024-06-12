

console.log(a); // undefined

if (0) {
    var a = 10;
}

console.log(a); // 10

// if (1) 
// GEC -> GS -> JIT -> a -> undfined ->  10
// Run -> undefined, 10

// if (0) 
// GEC -> GS -> JIT -> a -> undfined
// Run -> undefined, undefined