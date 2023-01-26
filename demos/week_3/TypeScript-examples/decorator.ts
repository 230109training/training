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

function logged(target){
    // you can do something with target
    console.log(target);
}

@logged
class Calculator{
    add(a: number, b: number): number{
        return a + b;
    }
}
const calculator = new Calculator();

/**
 * Decorator Factories
 * 
 * If we want to customize how a decorator is applied to a declaration, we can write a decorator factory. A decorator factory is simply a function that returns the expression that will be called by the decorator at runtime
 */

function color(value: string){
    // This is the decorator factory
    // It sets up the returned decorator function

    return function (target){
        // This is the decorator
        // We can do something with target or value
        console.log(value);
        console.log(target);
    }
}

@color("Red")
class EmptyClass{}

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

function enumerable(value: boolean){
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        descriptor.enumerable = value;
    }
}

class Greeter2{
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }

    @enumerable(false)
    greet(){
        return `Hello ${this.greeting}`;
    }
}

const g2 = new Greeter2("Mike");

/**
 * Accessor Decorators
 * Property Decorators
 * 
 * These two are the other types of decorators, and build on what we have covered so far.
 */