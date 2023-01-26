/**
 * Basic Generics
 * 
 * Generics are a way of creating reusable code that can work on a variety of types instead of being tied to a specific type.
 * This allows you to write more flexible and maintainable code that is less prone to errors
 * 
 * Generics are implemented using type variable, which are placeholders for the actual types that the code will work on
 * 
 * 
 */

function identity<T>(arg:T):string{
    return typeof arg;
}

console.log(identity("Hello"));
console.log(identity(23));

/**
 * We can use generics with Arrays to specify the data type of the array
 */

let numbers1: number[];
let numbers2: Array<number>;

/**
 * We can also use Generics to create reusable classes that can be initialized with a variety of different types
 */

// Datatype is passed into the class upon instantiation
class GenericClass<T> {

    // Field datatype is based on the generic value passed in
    holderValue: T;

    // Function data types are based on the passed in generic
    add: (value1: T, value2: T) => T;
}

let genericClassNumber = new GenericClass<number>();
genericClassNumber.holderValue = 0;
genericClassNumber.add = (x, y) => x + y;

console.log(genericClassNumber.add(4, 4)); // 8


let genericClassString = new GenericClass<string>();
genericClassString.holderValue = "name";
genericClassString.add = (x, y) => x + y;
console.log(genericClassString.add("hello ", "there")); // hello there
