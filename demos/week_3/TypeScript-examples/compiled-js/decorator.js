/**
 * Decorators
 *
 * Decorators are a way to add new functionality to existing classes, methods, properties and parameter
 *
 * To enable experimental support for decorators, you must enable the experimentalDecorator compiler option either on the command line or in your tsconfig.json
 *
 * command line
 *
 * tsc --target ES5 --experimentalDecorators
 *
 * tsconfig
 *
 * {
    "compilerOptions": {
            "target": "ES5",
            "experimentalDecorators": true
        }
    }
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Decorators are a special type of declaration that can be attached to a class declaration, method, accessor, property or parameter.
 *
 * It uses the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration
 *
 */
/**
 * Class Decorators
 *
 * These are declared just before a class declaration
 * The class decorator is applied to the constructor of the class and can be used to observe, modify, or replace a class definition.
 * A class decorator cannot be used in a declaration file.
 *
 * The expression of the class decorator will be called as a function at runtime with the constructor of the decorated class as its only argument
 *
 * If the decorator returns a value, it will replace the class declaration with the provided constructor function
 */
function logged(target) {
    // you can do something with target
    console.log(target);
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator = __decorate([
        logged
    ], Calculator);
    return Calculator;
}());
var calculator = new Calculator();
/**
 * Decorator Factories
 *
 * If we want to customize how a decorator is applied to a declaration, we can write a decorator factory. A decorator factory is simply a function that returns the expression that will be called by the decorator at runtime
 */
function color(value) {
    // This is the decorator factory
    // It sets up the returned decorator function
    return function (target) {
        // This is the decorator
        // We can do something with target or value
        console.log(value);
        console.log(target);
    };
}
var EmptyClass = /** @class */ (function () {
    function EmptyClass() {
    }
    EmptyClass = __decorate([
        color("Red")
    ], EmptyClass);
    return EmptyClass;
}());
/**
 * Multiple Decorators can be applied to a declaration
 *
 * @f @g x
 *
 * or
 *
 * @f
 * @g
 * x
 */
/**
 * Method Decorators
 *
 * A method decorator is declared just before a method declaration
 * The decorator is applied to the property descriptor for the method, they can be used to observe, modify, or replace a method definition.
 * A method decorator cannot be used in a declaration file, or on overloads
 *
 * The expression for the method decorator will be called as a function at runtime with three arguments
 *
 * - constructor function of the class for a static member, or the prototype of the class for an instance member
 * - The name of the member
 * - Property descriptor for the member
 */
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        descriptor.enumerable = value;
    };
}
var Greeter2 = /** @class */ (function () {
    function Greeter2(message) {
        this.greeting = message;
    }
    Greeter2.prototype.greet = function () {
        return "Hello ".concat(this.greeting);
    };
    __decorate([
        enumerable(false)
    ], Greeter2.prototype, "greet", null);
    return Greeter2;
}());
var g2 = new Greeter2("Mike");
