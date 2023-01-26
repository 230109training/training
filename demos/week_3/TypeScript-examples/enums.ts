/**
 * Enums
 * 
 * Enums are a way to define a set of named values, similar to a collection of constants
 * Enums are a feature of TS that is not a type-level extension of JS
 * 
 * TS provides us the numeric and string enum
 * 
 * These data structures are of constant length that hold a set of constant values.
 * Each of these constant values is known as a member of the enum.
 * 
 * Enums are useful when setting the properties or values that can only be a fixed set of numbers or values.
 */

/**
 * Numeric Enums
 * 
 * Numeric Enums are number-based enums. They store the string values as numbers
 * 
 * We have initialized the below example with North being 1. All of the following are auto-incrememented from that point on by 1.
 * 
 * If we do not set the initial value, then it will start from 0
 * 
 */

enum Direction {
    North = 1,
    East,
    South,
    West
}
// In other words, North is 1, East is 2, South is 3, and West is 4

/**
 * How to use Enums?
 * 
 * We can access any member as a property of the enum itself, and declare types using it
 */

enum UserResponse{
    No,
    Yes
}

function respondToUser(recipient: string, message: UserResponse){
    // ... have code that interacts or does something
    if(message === 1){
        console.log("Yes");
    }else{
        console.log("No");
    }
}

respondToUser("Mike Jones", UserResponse.Yes);

/**
 * String Enums
 * 
 * String Enums are similar in concept to Numeric Enums. But there are slight differences.
 * Each member of a string enum must be constant-initialized with a string literal or with another string enum member
 * 
 * There is no auto-incrementing behavior but we still have the benefit of serialized data.
 * Numeric enums are harder to understand what the values are trying to convey.
 * String enums provide your code with readability and meaningful values.
 */

enum StringUserResponse {
    No = "NO",
    Yes = "YES"
}

function respondToUserStringEnum(recipient: string, message: StringUserResponse){
    if(message === StringUserResponse.Yes){
        console.log("Yes");
    }else{
        console.log("No");
    }
}

respondToUserStringEnum("Mike Jones", StringUserResponse.Yes);