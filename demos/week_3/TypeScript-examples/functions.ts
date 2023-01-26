/**
 * Functions
 * 
 * Functions are the building blocks of any application
 * TS has many ways to describe how functions can be called
 */

// Here's a simple function in TS
function add(a: number, b: number): number{
    return a + b;
}

/**
 * In this example, the add function takes in two number parameters a and b
 * It returns a number as well, this is defined after the parenthesis for the parameters
 * 
 * function nameOfFunction(param: type): returnType{
 *  ... function code
 * }
 */

// Function Expressions
let addFunc = function(a: number, b: number): number{
    return a + b;
}

let arrowAdd = (a: number, b: number):number => a + b;


// We can use rest parameters to accept any number of arguments

function sum(...args: number[]):number{
    let total = 0;
    for(let arg of args){
        total += arg;
    }
    return total;
}

console.log(sum(1, 23, 4, 5, 6,343, 23, 2));

/**
 * Multiple Definitions
 * We can also have multiple definitions with different types of arguments
 * 
 * The correct implementation will be called based on the arguments passed in to it
 * 
 * The first two are not implemented, the final one shows the implementation that is shared by the top two functions.
 */

function adder(a: number, b: number):number;
function adder(a: string, b: string):string;
function adder(a: any, b: any): any{
    return a + b;
}

console.log(adder(1, 2));
console.log(adder("hello", " world"));


/**
 * Function Type Expressions
 * 
 * We can describe a function using the function type expression, which is syntactically similar to arrow functions
 */

function greeterFnExpression(fn: (a:string)=>void){
    fn("Hello World");
}

function printsToConsole(s: string):void{
    console.log(s);
};

greeterFnExpression(printsToConsole);

/**
 * Syntax for this
 * 
 * (a: string) => void
 * 
 * Means "a function with one parameter named a, of type string, that doesn't have a return value"
 * 
 * Notice that the parameter name is still required, because if you were to do
 * (string) => void
 * 
 * string would become a parameter name and the type would be any
 */

/**
 * Generic Functions
 * 
 * It's common to write a function where the types of the input relate to the type of the output
 * 
 * 
 */

function firstElement(arr: any[]){
    return arr[0];
}
/**
 * In this example, we have an array function that returns the first element inside the array
 * 
 * The function does its job, but the return type of any is a problem.
 * We want to know what the type it return, otherwise we will have difficulty working with it in Typescript
 * 
 * Generics are used when we want to describe a correspondence between two values
 */

function firstElementGeneric<Type>(arr: Type[]): Type | undefined{
    return arr[0];
}

/**
 * By adding type Parameter Type to this function and using it in two places, we've now linked the input of the function (array) and the output (return value)
 */

const s1 = firstElement(["a", "b", "c"]);
const s2 = firstElementGeneric(["a", "b", "c"]);

console.log(s1);
// Working without generics, we do not have any ide support and the assumed type is any
console.log(s2);
// Working with generics, we have full ide support and the assumed type is string