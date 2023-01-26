/**
 * Array Generics
 *
 * Generics are a way to create reusable code that can work with a variety of types
 *
 * An Array generic is a way to specify the types of elements that an array should hold
 */
var numbers = [1, 2, 3];
console.log(numbers); // [1, 2, 3]
/**
 * In this example, Array<number> specifies that the numbers variable is an array that holds the elements of type number
 *
 * We can still hold multiple types if we use union types
 */
var mixedArray = [1, "two", 3];
console.log(mixedArray); // [1, "two", 3];
/**
 * This is used to create reusable functions that work on any array of any datatype
 */
function reverseArray(arr) {
    return arr.slice().reverse();
}
console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
console.log(reverseArray(['a', 'b', 'c'])); // ['c', 'b', 'a'];
