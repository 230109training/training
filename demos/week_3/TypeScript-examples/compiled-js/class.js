/**
 * Classes
 *
 * TS offers full support for the class keyword
 * TS adds type annotation and other syntax to better express the relationships between classes and other types
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Simplest class
//class Point{}; // Empty class
/**
 * Class Members
 *
 * Fields:
 * A declaration that creates a public writeable property on a class
 */
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var pt = new Point();
pt.x = 0;
pt.y = 0;
console.log(pt); // Point { x: 0, y: 0 }
/**
 * The type annotation is optional, but it will be an implicit any if you do not specify it within the field declaration
 * Fields can also have initializers, that will run when the class is instantiated
 */
var Point2 = /** @class */ (function () {
    function Point2() {
        this.x = 0;
        this.y = 0;
    }
    return Point2;
}());
var pt2 = new Point2();
console.log(pt2);
/**
 * Just like with const, let, and var, the initializer of a class property will also use type inference
 */
/**
 * Constructor
 *
 * The constructor is a special method that is called when a new instance of the class is created
 *
 */
var Point3 = /** @class */ (function () {
    function Point3(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point3;
}());
var point = new Point3(1, 2);
console.log(point); // Point3 { x: 1, y: 2 }
/**
 * readonly
 * We can prefix some fields with this to make it read only
 * This means only the constructor can be used to assign values to it
 */
var Greeter = /** @class */ (function () {
    function Greeter(otherName) {
        this.name = "World";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    return Greeter;
}());
var greeter = new Greeter("Mike");
console.log(greeter.name);
// greeter.name = "Jim"; // You cannot update the values after the object has been created
/**
 * Method
 *
 * A function property on a class, this is a method
 * Methods can use all the same type annotations as functions and constructors
 */
var PointMethod = /** @class */ (function () {
    function PointMethod() {
        this.x = 10;
        this.y = 11;
    }
    PointMethod.prototype.scale = function (n) {
        this.x *= n;
        this.y *= n;
    };
    return PointMethod;
}());
var pointMethod = new PointMethod();
console.log(pointMethod); // PointMethod { x: 10, y: 11 }
pointMethod.scale(4);
console.log(pointMethod); // PointMethod { x: 40, y: 44 }
var GreeterPrint = /** @class */ (function () {
    function GreeterPrint() {
    }
    GreeterPrint.prototype.print = function () {
        console.log(this.message);
    };
    return GreeterPrint;
}());
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
/**
 * Extends clause
 *
 * Classes may extend from a base class.
 * A derived class has all the properties and methods of its base class, and also can define additional members
 *
 * You can only extend from one base class at a time
 */
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("I'm moving now");
    };
    return Animal;
}());
;
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function (times) {
        for (var i = 0; i < times; i++) {
            console.log("Bark!");
        }
    };
    return Dog;
}(Animal));
var dog = new Dog();
// base class methods
dog.move();
// derived class methods
dog.bark(3);
/**
 * Overriding Methods
 *
 * A derived class can also override a base class field or property
 *
 * We also have access to the super keyword that lets us access base class methods or fields.
 *
 * TS enforces that a derived class is always a subtype of its base class
 */
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.greet = function () {
        console.log("Hello World");
    };
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived.prototype.greet = function (name) {
        if (name === undefined) {
            _super.prototype.greet.call(this);
        }
        else {
            console.log("Hello, ".concat(name));
        }
    };
    return Derived;
}(Base));
var derived = new Derived();
derived.greet();
derived.greet("Name");
