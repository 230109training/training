/**
 * Type Aliases and Interfaces
 *
 * A Type alias creates a new name for an existing type, using the type keyword
 */
/**
 * This creates a new type named `StringOrNumber` that is the union of String and Number
 * We can now use it as the type of a variable, function argument, or return type
 */
var value;
value = "Hello";
value = 43;
function combine(a, b) {
    return a.toString() + b.toString();
}
console.log(combine(10, "Hello")); // 10Hello
// Now we implement the interface
var PointImplementation = /** @class */ (function () {
    function PointImplementation(x, y) {
        this.x = x;
        this.y = y;
    }
    PointImplementation.prototype.distanceFromOrigin = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    return PointImplementation;
}());
var point1 = new PointImplementation(3, 4);
console.log(point1.distanceFromOrigin());
