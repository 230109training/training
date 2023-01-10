/*
    In JavaScript, there are several datatypes that you can use to represent different kinds
    of data in your code

    1. Number (primitive): The number datatype is used to represent both integer 
        and floating-point values
    2. String (primitive): The string datatype is used to represent text data. Strings 
        are written using single or double quotes, or template literals `` (special)
    3. Boolean (primitive): Represents true or false. Booleans are mainly used in the context
        of conditionals or loops. true represents a condition that is met, and false represents
        a condition that is not met
    4. Null: The null datatype is used to represent a null/empty value. It is often used to
        indicate that a variable has no value
    5. Undefined: The undefined datatype is used to represent a value that has not been assigned
        yet to a newly declared variable.
    6. Object: The object datatype is used to represent collections of key-value pairs in JS
*/

// Variables
// To create a variable, you should utilize a declaration keyword
// There are 3 possible declaration keywords:
//  1. var: The oldest keyword in JS. It is the original way of declaring variables, but no longer
//          recommended to be used, because var does not support block-scope
//  2. let: A newer keyword introduced in ES6 (ES2015) that added the ability for variables
//          to be block-scoped
//  3. const: A newer keyword introduced is ES6 (ES2015) that added the ability for constants
//           AND block-scope. Const is basically the constant version of let

// Number datatype
let aNumber = 10; // semi-colons are optional in JS, but many people like to use it anyways
// because it's a carryover from other programming languages such as Java, C, C++, C#
let aNumber2 = 3.14;

// String datatype
let aString = 'this is a string using single quotes';
let aString2 = "this is a string using double quotes";
let aString3 = `this is a string constructed using template literals. It is special because I 
can do things like this: aNumber + aNumber2 is ${aNumber + aNumber2}`; // template literal

console.log(aNumber);
console.log(aNumber2);
console.log(aString);
console.log(aString2);
console.log(aString3);

// Boolean datatype
let aBoolean = true;
let aBoolean2 = false;

if (aBoolean) {
    console.log('aBoolean is true!');
} else {
    console.log('aBoolean is false!');
}

if (aBoolean2) {
    console.log('aBoolean2 is true!');
} else {
    console.log('aBoolean2 is false!');
}

// Null datatype
let x = 10;
console.log(x); // 10
x = null;
console.log(x); // null

// Undefined datatype
let y;
console.log(y); // undefined

// Object
// Objects are collections of key-value pairs
let person = {
    firstName: "Bach",
    lastName: "Tran",
    age: 25,
    isRetired: false,
    greet: function() {
        console.log(`Hi everyone, my name is ${this.firstName} ${this.lastName}`);
    }
}

console.log(person.firstName); // Bach
console.log(person['lastName']) // Tran
console.log(person.age); // 25
// ...
person.greet(); // calling the greet function -> output: Hi everyone, my name is Bach Tran

