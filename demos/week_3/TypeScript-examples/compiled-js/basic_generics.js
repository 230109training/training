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
function identity(arg) {
    return typeof arg;
}
console.log(identity("Hello"));
console.log(identity(23));
/**
 * We can use generics with Arrays to specify the data type of the array
 */
var numbers1;
var numbers2;
/**
 * We can also use Generics to create reusable classes that can be initialized with a variety of different types
 */
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    return GenericClass;
}());
var genericClassNumber = new GenericClass();
genericClassNumber.holderValue = 0;
genericClassNumber.add = function (x, y) { return x + y; };
console.log(genericClassNumber.add(4, 4));
var genericClassString = new GenericClass();
genericClassString.holderValue = "name";
genericClassString.add = function (x, y) { return x + y; };
console.log(genericClassString.add("hello ", "there"));
