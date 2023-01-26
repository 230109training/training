/**
 * Type Aliases and Interfaces
 * 
 * A Type alias creates a new name for an existing type, using the type keyword
 */

type StringOrNumber = string | number;

/**
 * This creates a new type named `StringOrNumber` that is the union of String and Number
 * We can now use it as the type of a variable, function argument, or return type
 */

let value: StringOrNumber;
value = "Hello";
value = 43;

function combine(a: StringOrNumber, b: StringOrNumber): StringOrNumber{
    return a.toString() + b.toString();
}

console.log(combine(10, "Hello")); // 10Hello

/**
 * Interfaces
 * 
 * Interfaces describe the structure of an object, including the names and types of its properties, and any methods it has.
 * 
 * It can be considered a contract that sets a specific structure and methods for the class which implements it
 */

interface Point{
    x: number;
    y: number;
    distanceFromOrigin(): number;
}

// Now we implement the interface
class PointImplementation implements Point{
    x: number;
    y: number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    distanceFromOrigin(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}

let point1: Point = new PointImplementation(3, 4);
console.log(point1.distanceFromOrigin()); // 5

/**
 * Interfaces can also extend other interfaces, meaning that an interface can inherit the properties and methods of another interface
 */

interface Animal{
    name: string;
}

interface Bear extends Animal{
    honey: boolean;
}

/**
 * Differences between Interface and Type Alias
 * 
 * Almost all features of an interface are available in type
 * The key distinction being that a type cannot be re-opened to add new properties
 * Interfaces are always extendable
 * 
 * If you did want to extend a type alias, we would have to use intersections
 */

type AnimalType = {
    name: string
}

type BearType = Animal & {
    honey: boolean
}

// A type cannot be changed after it has been created