// // How does javascript work?


// // What is a program?
// // It 1. allocates memory , 2. parses and execute scripts(read and run commands)
// // javascript needs JIT compiler to execute script
// // Javascript engine is v8, it is implemented by every browser. it reads the code we write, and changes it to machine executable command
// // this engine has 2 parts, memory heap and call stack.
// // memory allocation happens in memory heap
// // call stack is where the code is read and executed.
// // for example:
// const a = 1; // allocate a memory in memory heap
// // if we do not use the value of a, memory leak takes place
// // lets talk about call stack

// console.log('1'); // moved to call stack --> executed --> removed from call stack
// console.log('2'); // moved to call stack --> executed --> removed from call stack
// console.log('3'); // moved to call stack --> executed --> removed from call stack

// another example of call stack
const one = () =>{
    const two = () =>{
        console.log('2');
    }
    two()
    console.log('1');
}
one()
// CALL STACK:
// javascript is a single threaded language which is non-blocking, meaning it has only one call stack 

// why single thread? 
// because js was initially developed as a scripting language, for web ui. If it was made multi-threaded, simple tasks would cause a bucketful of problems regarding concurrency, locking etc

// what does stack overflow mean?
// example
function foo(){
    foo()
}
foo()
// this is a recursive function without a breaking statement. this will cause a stack overflow.

// Problems with single thread: 
// for example:
console.log('1');
foo() // which takes 5 seconds to execute
console.log('3'); 
// this is a big problem, and something which will occur in a daily basis
// comes the asynchronous javascript in rescue\



// how is this happening practically?

// js isnt just v8 engine, it has web APIs(dom, setTimeout function etc), c++ APIs, callback queue, event loop

// call stack

// web api
setTimeout(()=>{
    
},5000)

// callback queue


// event loop
