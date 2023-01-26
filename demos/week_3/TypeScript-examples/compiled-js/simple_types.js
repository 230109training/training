/**
 * Simple Types
 *
 * Simple types are built into TypeScript and are used to specify the type of a variable or function parameter
 *
 * - number
 * - string
 * - boolean
 * - symbol
 * - undefined
 * - null
 * - any
 * - void
 *
 * Type Annotation
 *
 * When you declare a variable using const, var, or let, you can optionally add a type
 *
 * let myName: string = "Alice";
 *
 * TS will use type inference if you do not provide a type annotation
 */
// Number
var age = 30;
age = 40; // valid
//age = "30"; // Error, string is not assignable to number
// String
var personName = "John Doe";
personName = "Jane Doe"; // valid
// personName = 43; // error, number is not assignable to string
// boolean
var isStudent = true;
isStudent = false;
// isStudent = 1; // error, number is not assignable to boolean
// any type is the type when you want to mimic the behavior of JS types (there is none)
var x = 5;
x = "Hello";
x = false;
