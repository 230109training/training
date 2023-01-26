/**
 * Functions
 *
 * Functions are the building blocks of any application
 * TS has many ways to describe how functions can be called
 */
// Here's a simple function in TS
function add(a, b) {
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
var addFunc = function (a, b) {
    return a + b;
};
var arrowAdd = function (a, b) { return a + b; };
// We can use rest parameters to accept any number of arguments
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        total += arg;
    }
    return total;
}
console.log(sum(1, 23, 4, 5, 6, 343, 23, 2));
function adder(a, b) {
    return a + b;
}
console.log(adder(1, 2));
console.log(adder("hello", " world"));
/**
 * Function Type Expressions
 *
 * We can describe a function using the function type expression, which is syntactically similar to arrow functions
 */
function greeterFnExpression(fn) {
    fn("Hello World");
}
function printsToConsole(s) {
    console.log(s);
}
;
greeterFnExpression(printsToConsole);
