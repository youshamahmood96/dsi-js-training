// // Closures are functions that refer to independent (free) variables (variables that are used locally,but defined in an enclosing scope).
// // In other words, these functions 'remember' the environment in which they were created.
// // so closure = function + lexical environment


// // Example of lexical scoping:
// function init() {
//     var name = "Mozilla"; 
//     function displayName() {
//         console.log(name); 
//         return name
//     }
//     displayName();
// }
// console.log(init());
// // in this case, nothing wrong with the code because when the init() will be called, var name will be available inside displayName() as var is function scoped withing the init() function

// // Now lets consider the following example:

// function init() {
//     var name = "Mozilla"; 
//     return function displayName() { 
//         return name 
//     }
// }
// init()
// // this is okay too, as we are returning the function itself(callback function), which will return the name variable available in its parent scope

// // Now a further more:
// function init() {
//     var name = "Mozilla";
//     return function displayName() {
//         return name
//     }
// }
// var initCaller = init();
// // console.log(initCaller());
// // // how is this supposed to work? because usually, the local variables within a function exist for just the duration of that function's execution
// // // but when the initCaller() starts executing, it is an expected behavior to lose the variable reference and give a reference error. RIGHT?
// console.dir(initCaller) // see the output and find closure
// // Functions in javascript form closures, which is the combination of a function and the lexical environment, which will hold all the information of the time the closure was created.
// // for example, here initCaller is the reference of the instance of function init(), so initCaller's closure holds the value of the variable "name" as it was inside its lexical environment

// what about the following?
// (function(){
//     var name = "Mozilla";
// function init() {
//     return function displayName() {
//         return name
//     }
// }
// var initCaller = init();
// console.dir(initCaller)
// })() // iife

// emulating the "private" field

// var counter = (function () {
//     var privateCounter = 0;
    
//     function changeBy(val) {
//         privateCounter += val;
//     }

//     return {
//         increment: function () {
//             changeBy(1);
//         },

//         decrement: function () {
//             changeBy(-1);
//         },

//         value: function () {
//             return privateCounter;
//         }
//     };
// })();

// console.log(counter.value());  

// counter.increment();
// counter.increment();
// console.log(counter.value());

// counter.decrement();
// console.log(counter.value());

// var vs letconst

// function init() {
//     let name = "Mozilla";
//     return function displayName() {
//         return name
//     }
// }
// let initCaller = init();
// console.dir(initCaller)

// show this in an enclosed scope--->

// (function(){
//     let name = "Mozilla";
// function init() {
//     return function displayName() {
//         return name
//     }
// }
// let initCaller = init();
// console.dir(initCaller)
// })()


// // closure scope chain

// var e = 10;
// function sum(a){
//   return function(b){
//     return function(c){
//       // outer functions scope
//       return function(d){
//         // local scope
//         return a + b + c + d + e ;
//       }
//     }
//   }
// }




// function makeSequence(startingValue) {
//     let currentValue = startingValue || 0;

//     return function increment() {
//         return currentValue++;
//     }
// }

// // in closure object, we do not store the exact values, rather we store the reference

// const s1 = makeSequence();
// console.dir(s1);
// console.log("s1 values:")
// console.log( s1() );
// console.dir(s1)
// setTimeout(()=>{
//     console.log( s1() );
// },2000)
// console.dir(s1)
// setTimeout(()=>{
//     console.log( s1() );
// },2000)
// console.dir(s1)
// const s2 = makeSequence(100);

// console.log("\ns2 values:")
// console.log( s2() );
// console.log( s2() );
// console.log( s2() );

// console.log("\ns1 values:")
// console.log( s1() );
// console.log( s1() );
// console.log( s1() );

