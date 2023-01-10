// Type coercion is the automatic conversion of one type to another
// when performing some operation
console.log('5' == 5); // true
console.log('5' + 123); // 5123, when you add a number to a string, the number first gets 
// converted into a string and then "concatenated" with the other string
// '5' + 123 -> '5' + '123' -> '5123'
// 'hi' + ' ' + 'there' -> 'hi there'

console.log(true > -1); // true, true gets converted into number 1 
// (false would be converted into 0)
console.log(false == 0); // true

// Using a non-boolean value in a boolean context
// Truthy and falsy values
// Everything is truthy, except for
// 0, null, undefined, NaN, ''
if (10) {
    console.log('10 is considered a true value');
}

if (0) { // 0 is considered a false value
    console.log('testing');
}

// Type Conversion
// We can convert between different types explicitly
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false

console.log(Number(true)); // 1
console.log(Number(false)) // 0
console.log(Number('15')); // 15

console.log(String(15)) // '15'

let x = 'test';
console.log(typeof(x)); // string
