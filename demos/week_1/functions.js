/*

    A function is a block of code that performs a specific task and can be reused multiple
    times in a program

    Functions are often used to encapsulate a piece of logic or a set of related tasks, making
    it easier to understand and maintain large programs.

    Functions can take input values, called arguments, when the function is being called.

    The input values are stored in variables within the function known as parameters.

    Function v. Method
    - A method is simply a special function
        - What's special is that a method is a function that belongs to an object

*/

// Here we declare a function with a single parameter called name
function greet(name) {
    console.log(`Hello, ${name}`);
}

greet('Bob');
greet('Alice');
greet('Bach');

// Functions can also have a return value
// We can return a value from a function using the return keyword
function createGreetingMessage(name) {
    return `Hello there ${name}!`;
}

let greeting = createGreetingMessage('John');
console.log(greeting); // Hello there John!

/*

    Types of functions in JavaScript:

    1. Named functions
        A function that has a name, which is specified when the function is defined
        - Uses the function keyword
    2. Anonymous functions
        Functions that don't have a name, but can be assigned to a variable, passed around
        as arguments, returned from other functions, etc.
        - Uses the function keyword
    3. Arrow functions
        Functions that use a shorthand syntax for defining a function
        They utilize the => syntax

*/

function myNamedFunction() {
}

let z = function(param1) { // This anonymous function is being stored in a variable
    console.log('anonymous function');
    console.log(param1);
}

z(10);
z(12);

let w = (param1, param2) => {
    return param1 + param2;
}

console.log(w(3, 4)); // 7

/*
    Default parameters
*/
function calculateRectangleArea(length = 0, width = 0) {
    return length * width;
}

console.log(calculateRectangleArea()); // 0
console.log(calculateRectangleArea(undefined, 10)); // length = 0, width = 10
console.log(calculateRectangleArea(10)) // length = 10, width = 0
console.log(calculateRectangleArea(10, 12)); // 120
