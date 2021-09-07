// console.log(myFunc(5));
// const myFunc= (num)=>{
//     return num
// }



// // `this` in arrow function is bound to the parent, it doesnt depend on how are you calling this
// // this inside an arrow function takes the value, which it would have, if the arrow function was not there

//normal function
// const obj = {
//     someMethod(){
//         return this
//     }
// }
// let a = obj.someMethod;
// console.log(a());
// console.log(obj.someMethod());

// //arrow function 
// const obj = {
//     someMethod:()=>{
//         return this
//     }
// }
// let a = obj.someMethod;
// console.log(a());
// console.log(obj.someMethod());

// from masum bhai's lecture

// const printName=()=>{ 
//     console.log(`${this.brand} : ${this.model}`);
// }
// const car = {
//     brand:'toyota',
//     model:2012,
//     printName
// }
// car.printName()


// // you cannot use new keyword with arrow function, because arrow functions cannot be used as constructors
// function myFun () {
//     return () =>{
//         return this
//     }
// }
// const myObj = new myFun();








// function hof(f) {
//     return (...args) => {
//         console.log("calling with", args);
//         let result = f(...args); // test(..args)
//         console.log("called with", args, ", returned", result);
//         return result;
//     };
// }
// const test = (...args) => {
//     let arr = [...args]
//     if (arr.length === 0) return Infinity;
//     let lowest = Infinity
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < lowest) {
//             lowest = arr[i];
//         }
//     }
//     return lowest;
// }
// console.log(hof(test)(3,2,1)); // currying

// elonquent javascript