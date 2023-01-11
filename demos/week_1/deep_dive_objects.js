// To create objects in JS, we do NOT need to use the "new" keyword necessarily, although you may encounter the
// usage of that keyword

// The easiest way to create an object is using object literals {}
const myObj = {}; // Just using the object literals means I have constructed an object that is now stored in memory

// You can add properties at any time to an object. You are not restricted to predefining a blueprint (class)
myObj.name = 'John'; // property is added for first time

myObj['age'] = 20; // property is added for first time
myObj.age = 21; // property is modified to a new value

console.log(myObj);

myObj.isVeteran = false;

console.log(myObj);

// Create an object with initial properties
const myObj2 = {
    firstName: 'Bach', // firstName is a key
    'lastName': 'Tran', // lastName is a key (string quotes are optional)
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
};

console.log(myObj2);

/*
    Function constructors

    A function constructor is a function that is used to create objects that we would like to share similar characteristics
    more easily. The function constructor is used to set the properties' values for that object

    Naming Convention for a function constructor: PascalCase
*/
function Person(fn, ln, a) {
    this.firstName = fn;
    this.lastName = ln;
    this.age = a;

    // This is commented out, because it is inefficient
    // Each person object would have its own instance of the greet function, which is a waste of memory/resources
    // this.greet = function() {
    //     console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    // }
}

// Functions are also objects, which means we can modify properties/add properties to a function
// There is a "prototype" property that belongs to each constructor function that is also an object itself. All objects
// created from the constructor function inherit all of the properties from the .prototype object

// This makes things more efficient by having all person objects use the same instance of the greet function
Person.prototype.greet = function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    } 

// JavaScript makes use of prototypal inheritance, which means that objects inherit from other objects

const person1 = new Person('John', 'Doe', 28);
const person2 = new Person('Jane', 'Doe', 57);

console.log(person1);
console.log(person2);

person1.greet(); // Hello, my name is John Doe
person2.greet(); // Hello, my name is Jane Doe

console.log(typeof(Person.prototype)); // object
console.log(Person.prototype); // { greet: [Function (anonymous)] }

// Manual inheritance using __proto__
const anObject = {
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
}

const p1 = {
    firstName: 'Test',
    lastName: 'Testy'
}

// __proto__ is a property an object that refers to the object's prototype (parent)
p1.__proto__ = anObject; // p1 is now inheriting from anObject

p1.greet();

console.log(anObject.firstName); // undefined
console.log(anObject.lastName); // undefined
anObject.greet(); // Hello, my name is undefined undefined

anObject.firstName = 'abcdef';
anObject.lastName = 'asdfsdf';
anObject.greet();

/*
    Classes in JavaScript 

    Classes in JS were added in ES6. It provides a cleaner and more easily understandable format for creating object
    "blueprints" rather than utilizing function constructors

    One thing to note with classes in JS is that they're not "true classes". Classes in JS are more like "syntactic sugar"

    Classes have a "constructor" block and any functions that we would like to have associated with that object
*/

class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }

    // Methods
    drive() {
        console.log(`Driving the ${this.year} ${this.make} ${this.model}`);
    }
}

const car1 = new Car('Toyota', 'Camry', 2018);

console.log(car1);
car1.drive();
