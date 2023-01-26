/**
 * Tuples
 *
 * Typescript introduced a new data type called tuple
 * This is used to define the data types allowed within an array
 */
var id = 1;
var empName = "Mike";
// Tuple
var employeeTuple = [id, empName];
/**
 * In the above example, we have defined two variable of different ypes.
 * We have then created a tuple, and defined what data types that we allow inside it
 *
 * A tuple is not limited by just two data types
 */
var user; // declaring tuple
user = [1, "Steve", true, 20, "Admin"]; // Initialize tuple
// We can also declare an array of tuple
var employee;
employee = [[1, "Steve"], [2, "Mike"], [3, "Jane"]];
// To access a value inside a tuple, we use index notation
console.log(user[1]);
// To add an element to a data type, we can use push
employeeTuple.push("Mike");
console.log(employeeTuple); // [1, "Mike", "Mike"]
//employeeTuple.push(false); // cannot add datatypes that are not part of the tuple definition
