# QC Review - JavaScript/DynamoDB Competency
Week 1 to Week 3
- JavaScript
- DynamoDB
- Express.js
- Node.js

## Common issues
* var, let, and const
    - In JS, these are the variable scopes: global, function, block
    - var was originally part of JS (back in the early days before JS became more standardized and "better")
        - var only has global and function scope
            - If you define a var variable in the global scope, it is a globally scoped variable
            - If you define a var variable anywhere inside a function, it is a function scoped variable
        - Let and const
            - If you define a let or const variable in the global scope, it is a globally scoped variable
            - If you define a let or const variable in a block it is a block scoped variable
            - If you define a let or const variable in a function (not inside of a block), it is a function scoped variable
    - Hoisting: functions and var variables are "hoisted" to the top of the scope in which they were defined
        - Does not apply to const and let

```javascript
console.log(z); // value of undefined
z = 100;
console.log(z); // 100

const a = 10; // global scoped
// Cannot re-assign a new value to a const

let b = 12; // global scoped

const person = {
    firstName: "Bach",
    lastName: "Tran"
}

person.lastName = "Doe" // We can still mutate the object
// that is being referenced by const person (const does
// not prevent you from doing that)
person.age = 25;

// Not allowed
person = {}

myFunction(); // This function can be called
// even though I have not defined it yet in the code
// above line 45
// In languages like Python, it would complain and say
// that the function does not exist

function myFunction() {
    // var a; <- even though var a was declared in the block
    // it got hoisted to the top of its scope, which is
    // function scope
    var e = 1000; // function scoped

    if (true) {
        var a = 10; // function scoped
        const b = 12; // block scoped
        let c = 15; // block scoped
    }
    console.log(a); // 10
}

myFunction();
myFunction();
myFunction();

// undefined() cannot call something that is undefined
myArrowFunction(); // this would not work
// arrow functions cannot be hoisted because they don't have
// a name and must be referenced to by a variable
// 
var myArrowFunction = () => {
    // ...
}

// what value does the variable 'myAnonymousFunction' have here?
// It is a var, so it was hoisted and therefore exists
// But, it is currently **undefined**
// Calling something that is undefined does not work because
// it is not a function
myAnonymousFunction();
var myAnonymousFunction = function() {
}

let g = 10;
console.log(g); // 10
g(); // cannot call numbers, only functions can be called
g = () => {
    // ...
}
console.log(g); // [function]
g();

var d = 100; // global scoped

var z; // declare variable here

```

- Rule of thumb: always use const unless you know that the value of a variable will change
    - Don't use var

* functions
    - 3 types of functions
        - named functions
            - have a name
            - derive the this keyword from the object that is invoking the function
            - syntax: `function myNamedFunction() {}`
        - anonymous functions
            - no name
            - derive the this keyword from the object that is invoking the function
            - syntax: `function() {}`
        - arrow functions
            - no name
            - arrow functions derive their this keyword from the this keyword in the lexical scope in which the arrow function was defined
            - syntax:
                1. Single expression arrow functions
                `arr.filter((element) => element.id === 10)`
                - implicitly `return element.id === 10`
                2. multi-statement arrow functions
                ```javascript
                arr.filter((element) => {
                    const myBoolean = element.id === 10;
                    return myBoolean;
                });
                ```
                - Must use return keyword if using curly braces IF you want to return something
* DynamoDB Primary key
    - To clarify: partition keys are NOT the primary key
    - The primary key consists of both the partition key AND sort key
        - The way DynamoDB works internally is that all of our data is distributed across many servers (aka partitions)
        - This is unlike SQL databases, where all of the data is stored on one server (potentially with some read replicas)
        - Partition keys map to the partition that the item should be located on
        - Sort keys order the data within that partition
            - Query for all of user_id 10's todos that were created between time 120000 and 125000
            - Query for all of user_id 10's todos that were created later than time 150000 (> 150000)
            - Query for all of user_id 10's todo that were created earlier than time 100000 (< 100000)

Todo Table
- user_id (partition key)
- time_created (sort key)

- 4 items
    - user_id = 10, time_created=123123
    - user_id = 10, time_created=123124
    - user_id = 10, time_created=123125
    - user_id = 11, time_created=123123

```javascript
const params = {
    TableName: 'mytable',
    Key: {
        user_id: 10,
        // MUST include sort key as well,
        // otherwise this is broken
    }
}

// This fails because we are not specifying the primary key
// .get is used to retrieve a specific unique item
documentClient.get(params).promise().then((data) => {
    console.log(data);
});
```

* DynamoDB Secondary Indices
    - The term secondary for secondary indices comes from the fact that the table itself is the primary index
    - The purpose of a secondary index is to support `query` operations
        - This allows us to efficiently query for items without using the primary key (unique)
            - Note: primary key <- uniquely identifies an item
        - Indices' keys do not need to be unique
            - both partition and sort keys
        - Cannot use .get, .update, .delete using index keys, only the table's primary key
            - Can only use query() with indices
    - Two types of secondary indices
        - Local secondary indices
            - The partition key is the same as the table
                - Only the sort key is different
                - This implies every partition of a local secondary index is scoped to the table partitions themselves
                    - Hence, why local secondary indices are called "local"
            - Minor: can only be created at the same time as the table
        - Global secondary index
            - Partition key is different (as well as sort key)
                - Global secondary indices are stored in their own partition space separately from the table itself
            - Minor: Can be created after table has already been created
