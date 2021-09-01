// setTimeout concept:
// console.log('1');
// setTimeout(function(){
//     console.log('2');
// },0)
// console.log('3');


// Generators are functions that can be exited and later re-entered.Their context (variable bindings) will be saved across re-entrances.
// Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead
//  When the iterator's next() method is called, the generator function's body is executed until the first yield expression, which specifies the value to be returned from the iterator or, 
// with yield*, delegates to another generator function.
//  The next() method returns an object with a value property containing the yielded value and a done property which indicates whether the generator has yielded its last value, as a boolean.
// Calling the next() method with an argument will resume the generator function execution, replacing the yield expression where an execution was paused with the argument from next().

// Example
let personArray = [
    {
        name: 'John',
        age: 25
    }
]
function* generator() {
    personArray.push({
        name: 'Kira',
        age: 22
    })
    yield "first step finished" // A breaking point, used to distinguish between different steps of a generator function
    personArray.push({
        name: 'Kat',
        age: 23
    })
    yield "second step finished"
}

var gen = generator();
console.log(gen.next());
console.log(personArray[1]);
console.log(personArray[2]);
console.log(gen.next());
console.log(personArray);
