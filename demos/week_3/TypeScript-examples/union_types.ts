/**
 * Union Types
 * 
 * A Union type in TS is a type that can be one of several types
 * 
 * We use the | character to separate the types
 * 
 */

let value: string | number;

// This value can be read as either string or number

value = "hello";
value = 34;
//value = true; // not valid

/**
 * Working with Union Types
 * 
 * It's easy to provide a value that matches the union type, but working with these varied value requires type checking
 * 
 * TS will only allow an operation if it is valid for every member of the union
 * If we have a union of string and number, we cannot use any string methods that cannot also be applied to the number values
 */

function printId(id: string | number){
    //console.log(id.toUpperCase()); // causes errors because toUpperCase cannot be done on number
}

// The solution is to provide type narrowing
function printIdWithNarrowing(id: string | number){
    if(typeof id === "string"){
        // id in this branch is a string since we have checked it first
        console.log(id.toUpperCase());
    }else{
        // id here is a number type
        console.log(id);
    }
}

// We can also do this arrays
function welcomePeople(people: string | string[]){

    if(Array.isArray(people)){
        // Here people are arrays
        console.log(`Hello, ${people.join(" and ")}`);
    }else{
        // Here people is a string
        console.log(`Hello Sole person ${people}`);
    }

}