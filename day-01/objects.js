// // value assignment vs reference assignemnt
// let y = {
//     b:3
// }
// let z = y
// z.c = 7
// console.log(y); 
// object deep copy vs shallow copy

// // Example 1
// let a = {
//     b:3
// }
// let x = {...a}
// x.c = 7
// console.log(a);

// //Example 2
// let person = {
//     name:"John",
//     place:{
//         street:1000,
//         post:'Khilgaon',
//         city:'Dhaka'
//     }
// }

// let personCopy = {...person}
// personCopy.place.city = 'Narayanganj'
// console.log(person);
// what to do? we will use deep copy here to avoid the problem

// follow these steps : 1. Stringify the object, 2. Store this in a new variable, 3. Parse the stringified object
// let person1 = {
//     name:"John",
//     place:{
//         street:1000,
//         post:'Khilgaon',
//         city:'Dhaka'
//     }
// }

// let stringified = JSON.stringify(person1)
// let personCopy1 = JSON.parse(stringified)
// personCopy1.place.city = 'Narayanganj'

// // destructure with aliases
// const { name:userName } = person1

// const {name:userName} = {name:'John'}
// console.log(userName);

