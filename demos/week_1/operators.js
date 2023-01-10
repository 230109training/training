// An operator is a symbol that is used to operate on a value or values

// Arithmetic operators
// + addition
// - subtraction
// * multiplication
// / division
// % modulus (for remainder of division)
// ** exponent

console.log(5 + 2); // 7
console.log(10 - 11) // -1
console.log(3 * 3) // 9
console.log(5 / 2) // 2.5
// % 2 can be used to check if a number is odd (1) or even (0)
console.log(5 % 2) // 1 (5 divided by 2 is equal to 2 remainder 1)
console.log(8 % 3) // 2 (8 divided by 3 is equal to 2 remainder 2)
console.log(2**3) // 8

// Assignment operators
// used to assign values to a variable
// =
// +=
// -=
// *=
// /=
// %=
// **=

let x = 10;
console.log(x); // 10
x += 2; // x = x + 2
console.log(x); // 12

x -= 2 // x = x - 2
console.log(x); // 10

x *= 2; // x = x * 2
console.log(x); // 20

x /= 2; // x = x / 2
console.log(x); // 10

x %= 7; // x = x % 7
console.log(x); // 3

x **= 2; // x = x ** 2
console.log(x); // 9

// Don't confuse assignment operators with arithmetic operators
// assignment operators perform arithmetic and then re-assign a new value to the variable
console.log(x - 2); // 7
console.log(x); // 9

// Comparison operators
//  Used to compare 2 values, and evaluates to a boolean datatype
//  > (greater than)
//  >= (greater than OR equal)
//  < (less than)
//  <= (less than OR equal)
//  == (equal with type coercion)
//  === (equal without type coercion -> strict equality)
//  != (not equal with type coercion)
//  !== (strict inequality)

console.log(x == 9); // true
console.log('dog' == 'dog') // true
console.log('5' == 5); // true -> string == number, type gets coerced into the other type
console.log('5' === 5); // false -> STRICT EQUALITY, must be the same type

console.log(10 > 11) // false
console.log(10 >= 10) // true

console.log(5 < 5) // false
console.log(5 <= 5); // true

console.log(5 != 5); // false
console.log('5' != 5); // false
console.log('5' !== 5); // true

// Logical operators
//  Used to evaluate two booleans against each other
//      && (and)
//          true && true -> true
//          true && false -> false
//          false && true -> false
//          false && false -> false
//      || (or)
//          true || true -> true
//          true || false -> true
//          false || true -> true
//          false || false -> false
//  Used to flip a boolean from true to false or false to true
//      ! (not)
//          !true -> false
//          !false -> true

let isPrecipitating = false;
let temperature = -10; // celsius

if (isPrecipitating && temperature <= 0) {
    console.log('It is snowing');
} else if (isPrecipitating && temperature > 0) {
    console.log('It is raining');
}

let day = 'Monday';

if (day === 'Saturday' || day === 'Sunday') {
    console.log('It is the weekend!');
} else {
    console.log('It is a weekday');
}

let isMinor = true;

if (!isMinor) {
    console.log('Adult')
} else {
    console.log('Child')
}