// Higher order functions
// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

// greater than example



// array methods

const clubs = [
    {
        name: "Sporting CP B",
        appearance: 2,
        goals: 0,
        seasons: 1
    },
    {
        name: "Sporting CP",
        appearance: 25,
        goals: 3,
        seasons: 1
    },
    {
        name: "Manchester United",
        appearance: 196,
        goals: 84,
        seasons: 6
    },
    {
        name: "Real Madrid",
        appearance: 292,
        goals: 311,
        seasons: 9
    },
    {
        name: "Juventus",
        appearance: 98,
        goals: 81,
        seasons: 3
    }
]
const flag = false // if flag is false, then only clubs where ronaldo has scored more than 100 goals will pass through
let goals = []
clubs.forEach(club=>goals.push(club.goals))

// forEach (immuting operation)

// clubs.forEach((club) => {
//     console.log(club.name);
// })

// filter (immuting operation)

// let x = clubs.filter(club=>club.goals >100)
// console.log(x);

// map

// let ui = []
// let uiLoader = club =>{
//     ui.push(club)
// }
// clubs.map(club=>uiLoader(club))
// console.log(ui);


// sort (mutating operation)

// Array.prototype.sort(compareFunction(a, b))
// function comparefunction(a, b) {
//     if ("a is less than b by some ordering criterion") {
//         return -1;
//     }
//     if ("a is greater than b by the ordering criterion") {
//         return 1;
//     }
//     // a must be equal to b
//     return 0;
// }

// If compareFunction(a, b) returns a value > than 0, sort b before a.
// If compareFunction(a, b) returns a value < than 0, sort a before b.
// If compareFunction(a, b) returns 0, a and b are considered equal.

// goals.sort((a,b)=>{
//     return a-b
// })
// console.log(goals);

// reduce

// The reduce() method executes a user-supplied “reducer” callback function on each element of the array,
//  passing in the return value from the calculation on the preceding element.
// The final result of running the reducer across all elements of the array is a single value.



// let sum = goals.reduce((previousValue, currentValue, currentIndex, array)=>{
//     return previousValue+ currentValue
// })
// console.log(sum);

// some

// console.log(goals.some((element,index,array)=>{
//     return element > 0
// }));

// function callbackfn(element,index,array){}

// Array.prototype.every(callBackfn)
// // every
// console.log(goals.every((element,index,array)=>{
//     return element >= 0
// }));


