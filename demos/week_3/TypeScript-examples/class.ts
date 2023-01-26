/**
 * Classes
 * 
 * TS offers full support for the class keyword
 * TS adds type annotation and other syntax to better express the relationships between classes and other types
 */

// Simplest class
//class Point{}; // Empty class

/**
 * Class Members
 * 
 * Fields:
 * A declaration that creates a public writeable property on a class
 */

class Point{
    x: number;
    y: number;
}

const pt = new Point();
pt.x = 0;
pt.y = 0;
console.log(pt); // Point { x: 0, y: 0 }

/**
 * The type annotation is optional, but it will be an implicit any if you do not specify it within the field declaration
 * Fields can also have initializers, that will run when the class is instantiated
 */

class Point2{
    x = 0;
    y = 0;
}

const pt2 = new Point2();
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

class Point3{
    x: number;
    y: number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
}

let point = new Point3(1, 2);
console.log(point); // Point3 { x: 1, y: 2 }

/**
 * readonly
 * We can prefix some fields with this to make it read only
 * This means only the constructor can be used to assign values to it
 */

class Greeter{
    readonly name: string = "World";

    constructor(otherName?: string){
        if(otherName !== undefined){
            this.name = otherName;
        }
    }

    // Only inside the constructor can readonly variables be updated
    // updateName(){
    //     this.name = "Mike";
    // }
}

const greeter = new Greeter("Mike");
console.log(greeter.name);
// greeter.name = "Jim"; // You cannot update the values after the object has been created

/**
 * Method
 * 
 * A function property on a class, this is a method
 * Methods can use all the same type annotations as functions and constructors
 */

class PointMethod{
    x = 10;
    y = 11;

    scale(n: number): void{
        this.x *= n;
        this.y *= n;
    }
}

const pointMethod = new PointMethod();
console.log(pointMethod)// PointMethod { x: 10, y: 11 }
pointMethod.scale(4);
console.log(pointMethod) // PointMethod { x: 40, y: 44 }


/**
 * Class Heritage
 * 
 * Classes in JS can inherit from other base classes, like other OOP languages
 * 
 * Implements clause
 * WE can use implements clause to check that a class satisfies a particular interface
 */

interface Printable{
    message: string;
    print(): void;
}

class GreeterPrint implements Printable{
    message: string;

    print(): void {
        console.log(this.message);
    }
}

// Classes may also implement multiple interfaces

interface A{
    val1: number;
}

interface B{
    val2: number;
}

class C implements A, B{
    val1: number;
    val2: number;
}

/**
 * Extends clause
 * 
 * Classes may extend from a base class.
 * A derived class has all the properties and methods of its base class, and also can define additional members
 * 
 * You can only extend from one base class at a time
 */

class Animal{
    move(){
        console.log("I'm moving now");
    }
};

class Dog extends Animal{
    bark(times: number){
        for(let i = 0; i< times; i++){
            console.log("Bark!");
        }
    }
}


const dog = new Dog();
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

class Base{
    greet(){
        console.log("Hello World");
    }
}

class Derived extends Base{
    greet(name?: string){
        if(name === undefined){
            super.greet();
        }else{
            console.log(`Hello, ${name}`)
        }
    }
}

const derived = new Derived();
derived.greet();
derived.greet("Name");

/**
 *  Access Modifiers / Member Visibility
 * 
 * We can define different access levels for our class properties
 * 
 * By default, members (fields or methods) of the TS class are public
 * 
 * Public
 * - These members are accessible from everywhere without restrictions
 * 
 * Private
 * - These members cannot be accessed from anywhere except from its containing class
 * 
 * Protected
 * - These members can only be accessed from the containing class and any derived classes
 */

// Public

class PublicGreet{
    public greet(){
        console.log("Hello");
    }
}

const pg = new PublicGreet();
pg.greet();

// Protected
class ProtectedGreet{
    public greet(){
        console.log(`Hello ${this.getName()}`)
    }

    protected getName(){
        return "Jimmy"
    }
}

class SpecialGreeter extends ProtectedGreet{
    public howdy(){
        // Derived classes have access to protected members of the base class
        console.log(`Howdy, ${this.getName()}`)
    }
}

const sg = new SpecialGreeter();
sg.greet();
sg.howdy();
// sg.getName(); // not okay

// Private

class PrivateBase{
    private x = 0;
}

const pB = new PrivateBase();
// console.log(pB.x);// can't access it from outside the class

class DerivedPrivateClass extends PrivateBase{
    showX(){
        // console.log(this.x); // still can't access it
    }
}


// Abstract
/**
 * Abstract classes are classes that cannot be instantiated on its own, and must be extended
 * 
 * These are similar to interfaces, except that abstract classes allow implementation and instantiation of fields but cannot be instantiated without a class.
 */

abstract class AbstractClass {
    x:number = 30;
    print(): void{
        console.log("Hello There!");
    }
}

// const abstractClass = new AbstractClass(); // not allowed

class ExtendedAbstract extends AbstractClass{
    y: number = 10;
}

const extenedAbstract = new ExtendedAbstract(); // This is fine
extenedAbstract.print();
