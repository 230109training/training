/**
 * Casting
 * 
 * JavaScript doesn't have type casting because variables have a dynamic type
 * As TS does have types, we can use type casting to tell the compiler that a value has a specific type even if the type of the value is not known.
 * 
 * Casting is used when you need to work with values that have a more specific type
 * 
 * There are two ways to cast in TS:
 * 
 * 1. <type>value
 *  - Angle Bracket Syntax
 * 2. value as type
 *  - 'as' syntax, same as the above but just a bit more readable
 */

// Angle Bracket Syntax
let value1 = "Hello";
let strLength = (<string>value1).length;
console.log(strLength); // 5

/**
 * Casting can be useful when the TS compiler is not able to infer the correct type of a value, and you know that the value has a more specific type.
 * (Typically when working with 3rd party libraries or APIs)
 * 
 * Casting only affects the type of a value, it doesn't actually perform any actual type conversion at runtime. The type of the value is still the same, and any errors that may occur due to using the value in the wrong way will only be caught in runtime
 * 
 * We can combine this with union types
 */

let value2: string | number;
value2 = "Hello";

if(typeof value2 === "string"){
    let strLength = (value2 as string).length;
    console.log(strLength);
}else{
    let numberValue = (value2 as number);
    console.log(numberValue)
}