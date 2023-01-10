/*
    Variable scope refers to the part of the program in which a variable is visible 
    and can be accessed.

    There are 3 scopes in JS:
    1. global scope
        A variable that is defined outside of any function or block of code
        Accessible from the global level, inside of functions + blocks
    2. function scope
        A variable that is defined inside of a function
        Accessible only from within that function and blocks of code inside of that function
    3. block scope (added in ES6 w/ let and const)
        A variable defined inside of a block of code (such as a for loop, while loop, if statement, etc.)
        Accessible only within that block

    declaration keywords:
    1. var -> global scope or function scope (no block scope)
    2. let (ES6) -> global scope, function scope, or block scope
    3. const (ES6) -> global scope, function scope, or block scope

    In general, it is recommended to use const whenever possible, because it helps to prevent
    accidental reassignmments and can make the code more predictable in nature
    Let should only be used when you need to reassign a variable, and var should be avoided in pretty
    much all cases, because it can lead to confusing behavior because there is no block scope
*/

var a = 100; // global scoped
let b = 111; // global scoped

if (true) {
    var x = 10; // global scoped
    let y = 13; // block scoped
    console.log(a); // 100
    console.log(y); // 13
    console.log(b) // 111
}

console.log(x); // 10

function myFunction() {
    console.log(x); // 10
    console.log(a); // 100
    console.log(b); // 111

    var z = -123; // function scoped

    console.log(z); // -123

    if (true) {
        console.log(z); // -123

        var w = 'a string'; // function scope
    }

    console.log(w); // a string
}

myFunction();
