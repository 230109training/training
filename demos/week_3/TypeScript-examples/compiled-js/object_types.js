/**
 * Object Types
 *
 * In TS, objects are a collection of properties where each property has a name and value.
 * The properties of an object can be accessed with the dot notation
 *
 * object.property or object["property"]
 *
 * They are used to represent values that are not primitive types.
 *
 * In JS, we pass data and group them using Objects. In TS, we represent those using object types
 */
// Anonymous Object Type
// Using type annotation, we can provide the object types
function greet(person) {
    return "Hello ".concat(person.name);
}
greet({ name: "Mike", age: 30 });
function greetInterface(person) {
    return "Hello ".concat(person.name);
}
function greetAlias(person) {
    return "Hello ".concat(person.name);
}
/**
 * In JavaScript, if you access a property that doesn't exist then you'll get undefined
 * We have to make sure we check the property is not undefined first before moving forward
 */
function printName(person) {
    // undefined check
    if (person.lastName === undefined) {
        console.log("Hello ".concat(person.firstName));
    }
    else {
        console.log("Hello ".concat(person.firstName, " ").concat(person.lastName));
    }
}
// Because we have set the lastName property to be optional
// TS will not throw an error if you do not include it
printName({ firstName: "Mike" });
printName({ firstName: "Mike", lastName: "Jones" });
