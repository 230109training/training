/*
    An array is a data structure that represents an ordered collection of values. In most programming
    languages, arrays are fixed in size, but in JavaScript arrays behave more like Lists (which are 
    expandable in size)
    - Arrays in JS are indexed (starting at 0 going up to length - 1)
    - There is a length property that exists for arrays to determine how many elements the array currently 
      has
    - A single array in JS can store a variety of datatypes [-1, false, {}, null, undefined, 100],
      but normally they are used to store just one type of data
*/

let colors = ["red", "green", "blue"];
let numbers = [1, -10, 16];

// Accessing values from an array
console.log(colors[2]); // blue
console.log(numbers[1]); // -10

console.log(colors.length); // 3
console.log(numbers.length); // 3

/*

    Common methods to use with arrays
    1. push(item): Adds a new value to the end of an array
    2. unshift(item): Adds a new value at the beginning of the array
    3. pop(): Removes the value at the end of the array and returns the removed value
    4. shift(): Removes the value at the beginning of the array and returns the removed value

    5. splice(startIndex, deleteCount): Removes the specified number of values from the array, 
        starting at the specified index and returns an array containing the removed items
    6. slice(startIndex, endIndex): Returns a copy of a portion of the array
    7. concat(array1, array2, ...): Return a new array that contains the values of the arrays passed
        in as arguments
    8. join(seperator): Returns a string that represents the array values, seperated by the specified
        seperator colors.join(", ") -> "red, green, blue, purple"
    9. indexOf(item, start): Returns the index of the first occurrence of the specified item
        starting from the specified index (linear search). Returns -1 if item is not found
    10. lastIndexOf(item, start): Returns the index of the last occurrence of the specified item in
        the array, starting from the specified index. Returns -1 if item is not found
    
*/

colors.push("purple");
console.log(colors); // [ 'red', 'green', 'blue', 'purple' ]
console.log(colors.pop()); // purple
console.log(colors); // [ 'red', 'green', 'blue' ]

colors.unshift("pink");
console.log(colors); // [ 'pink', 'red', 'green', 'blue']
console.log(colors.shift()); // pink
console.log(colors); // [ 'red', 'green', 'blue']

console.log(colors.splice(1, 2)); // [ 'green', 'blue' ]
console.log(colors); // [ 'red' ]