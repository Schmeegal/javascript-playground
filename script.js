"use strict";
// use strict helps to write better code

console.log("I'm working");

// variables 
//var - should not be used

//let - variables that can be reassigned
let secondVariable = 123;
console.log(secondVariable);

secondVariable = 321;
console.log(secondVariable);

//const - can't be reassigned
const thirdVariable = 456;

// template literals
console.log(`1 + 1 = ${1 + 1}`)

const name = "Kevin";
console.log(`Hello ${name.toUppercase()}`)

// operators
// + increment
let orders = 0;
orders ++; //adds 1

orders += 6;
orders -= 3;
orders *= 4;
orders /= 2;
orders %= 6;
orders **= 3;

//% modulus - gives remainder
console.log(13 % 3);

//** power
console.log(2 ** 3); //2 cubed

// + change into number if it can
console.log(1 + +"1"); //gives 2

//== will do a type conversion to make them the same 1 == '1'
//=== has to be same type and value to return true

// And &&
console.log(true && true);

//Or ||
console.log(true || true);

//Not !
let test = 'this is a test'
console.log(test !== 'this is a test');

// if conditionals
let time = 12;

if (time < 12){
    console.log("Good Morning")
} else if (time <17) {
    console.log("Good afternoon")
} else if (time < 22) {
    console.log("Good Evening")
} else {
    console.log("Good Night")
}

// switch statement - runs until hits a break statement
let language= 'english'

switch (language){
    case 'english':
        console.log("Good morning");
        break;
    case 'spanish':
        console.log("Hola")
        break
    default:
        console.log("👋")
}

// ternary  statement

let emotion = 'happy'

if (emotion ? 'happy': 'sad');
// check if emotion is happy, if not log sad

//Loops - for loop
for (let i = 99; i > 0; i--) {
    console.log(`${i} bottles of beer on the wall,
    ${i} bottle of beer,
    take one down, pass it around,
    ${i-1} bottles of beer on the wall.`);
}

//while loop
while (counter < 3) {
    console.log(`I'm counting and I've got to ${counter}.`);
    counter++;
}

//arrays - an ordered list - use index to access element in list
const newArray = ["hello", 123, true, Symbol()['blue', 'green', 'red']];

console.log(newArray);
console.log(newArray[0]);
console.log(newArray[4][1]); //access 'green' in nested array

//manipulating arrays - methods of arrays

const queue = ["Alex", "Jane", "Charlie"];

console.log(queue.length);  //length of an array (number of elements)

//push - add element to the end of the array
queue.push("Katy");

//pop - removes last element
queue.pop();

//shift - removes the first element
queue.shift();

//unshift - adds element at first element
queue.unshift("Alice");



//iterating arrays

const queued = ["Alex", "Jane", "Charlie"]

for (let i = 0; i < queued.length; i++){
    console.log(`Hello ${queued[i]}, waht can I do for you?`);
    //do some work for each person
}

//more modern code - for...of
for (let person of queued){
    console.log(person);
}   //this does same as above

//forEach - use a function for iterating array
queued.forEach(function(person){
    console.log(person);
});

