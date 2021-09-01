// // Example 1
// var x; // allocation
// console.log(x);
// x = 5 // assignment
// // when we use a variable, we do 2 things --> 1. declare(we tell memory that we need a variable) 2.assigne(we assign a value)
// // so the code from line 2,3 can be rewritten as---> 
// var x // global scope, it automatically allocates the value undefined as a placeholder
// console.log(x);
// x = 5 // assignment

// Example 2
// let y; // 
// console.log(y);
// y = 10
// // lines 11 and 12 can be rewritten as---> 
// let y // onbly assignment, no memory allocation
// console.log(y);
// y = undefined // memory allocation
// y = 10 // assignment


// // Example 3

// let z;
// console.log(z); // undefined

// // lines 22 and 23 can be rewritten as---> 
// let z;
// z=undefined // memory allocation
// console.log(z);

// //Example 4

let a = 'United'
let b = 'City'
function showClub(){
    if(!b){
        let b = a;
    }
    return b
}
console.log(showClub());


