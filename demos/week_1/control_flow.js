/*

    Control flow is all about controlling what code gets executed when a certain condition is met or not met
    This is ultimately how decisions are made in applications

    - if, else if, else
    - switch
    - for loops
    - while loops
    - do-while loops
*/

// If statement is used to execute a block of code if a certain condition is true
let x = 10;

if (x > 5) {
    console.log('x is greater than 5');
}

// We can also use an else statement to specify an alternative block of code to be executed
// if the condition in the if statement is false
let y = 5;

if (y > 5) {
    console.log('y is greater than 5');
} else {
    console.log('y is not greater than 5');
}

// We can also use multiple else if statements combined with an if statement to specify additional conditions
// to be checked

let z = 'Sunday';

if (z === 'Sunday') {
    console.log('First day of the week');
} else if (z === 'Monday') {
    console.log('Second day of the week');
} else if (z === 'Tuesday') {
    console.log('Third day of the week');
} else if (z === 'Wednesday') {
    console.log('Fourth day of the week');
} else if (z === 'Thursday') {
    console.log('Fifth day of the week');
} else if (z === 'Friday') {
    console.log('Sixth day of the week');
} else if (z === 'Saturday') {
    console.log('Seventh day of the week');
} else {
    console.log('Invalid day');
}

// Switch statements are used to execute a block of code based on the value of a variable
// You can specify multiple cases to be checked and specify different actions to be taken
switch(z) {
    case 'Sunday':
        console.log('First day of the week');
        break;
    case 'Monday':
        console.log('Second day of the week');
        break;
    case 'Tuesday':
        console.log('Third day of the week');
        break;
    case 'Wednesday':
        console.log('Fourth day of the week');
        break;
    case 'Thursday':
        console.log('Fifth day of the week');
        break;
    case 'Friday':
        console.log('Sixth day of the week');
        break;
    case 'Saturday':
        console.log('Seventh day of the week');
        break;
    default:
        console.log('Invalid day');
}

/*
    Loops
*/

// Loops are used in programming to execute a block of code multiple times

// For loop is used to execute a block of code, specifying 3 parts
// for (initialization; condition; update) { // ... }
//  1. initialization: executed at the beginning of the loop ONCE. Used to initialize a counter variable
//  2. condition: evaluated at the beginning of each iteration. If condition is true, code inside the block
//       is executed. If condition is false, loop is terminated
//  3. update: Executed at the end of each iteration of the loop. Used to update the counter variable

// print out numbers 0 to 4
// O(1), because 5 is a constant
for (let i = 0; i < 5; i++) { // i++ -> i = i + 1
    console.log(i);
}

// A while loop does not have initialization or update sections like a for loop. A while loop only has a condition
// As long as the condition is true, the while loop will continue running until the condition becomes false
// O(1), because 5 is a constant
let a = 0;
while (a < 5) {
    console.log(a);
    a++;
}

// A do-while loop is similar to a while loop, except a do-while loop always executes at least ONCE
// because the condition is evaluated at the end, not at the beginning
// O(1) because 5 is a constant
let b = 6;
do {
    console.log(b);
    b++;
} while(b < 5);

// O(n)
function printNumbers(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

printNumbers(10); // 10 iterations
printNumbers(100); // 100 iterations