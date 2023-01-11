/*
    The "this" keyword behaves differently in anonymous functions and arrow functions because of the way each type of function
    receives its meaning of "this"

    In anonymous functions, the "this" keyword refers to the object that the function is invoked on.

    In arrow functions, the "this" keyword is inherited from the "this" in the surrounding scope. In other words,
    the "this" keyword inside an arrow function is "lexically scoped", meaning it's determined by the location where
    the function is defined
*/

const person = {
    "firstName": "Bach",
    "lastName": "Tran",
    "greet": function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
}

// this === person inside the anonymous function when it's being executed
person.greet(); // Hello, my name is Bach Tran

/*  */
const person2 = {
    "firstName": "John",
    "lastName": "Doe",
    "greet": () => {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    } // This arrow function is "lexically scoped" to the "global scope"
}

console.log(this); // The this keyword here is the same as in the arrow function above

// this === the global object in the arrow function
person2.greet(); // Hello, my name is undefined undefined


/* */
const person3 = {
    "firstName": "Jane",
    "lastName": "Doe",
    "greet": function() {
        console.log(this);

        const arrowFunction = () => { // This arrow function was defined in the "function scope"
            console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
        }

        arrowFunction(); // invoke

    }
}

// The anonymous function's "this" will be person3
// The arrow function defined inside the anonymous function will inherit the "this" keyword from the function scope
// Therefore, the "this" for the arrow function will also be person3
person3.greet();


/* */
const person4 = {
    firstName: "Pablo",
    lastName: "De La Cruz"
}

person4.greet = person.greet;

person4.greet(); // Hello, my name is Pablo De La Cruz