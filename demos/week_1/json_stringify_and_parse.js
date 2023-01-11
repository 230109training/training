// fs is a built-in node module
const fs = require('fs'); // require is a function for node.js that allows us to import modules
// whether they are built-in node modules, npm packages that we install from the internet, or our
// own local modules

const obj = {
    firstName: "Bach",
    lastName: "Tran"
};

const obj2 = {
    firstName: "John",
    lastName: "Doe"
}

const array = [ obj, obj2 ];

const jsonString = JSON.stringify(array);

fs.writeFileSync('./jsondata.json', jsonString); // Write JSON to a file

const jsonReadFromFile = fs.readFileSync('./jsondata.json', 'utf-8'); // Read JSON from a file

const obj3 = JSON.parse(jsonReadFromFile); // converts JSON string back into an object
console.log(typeof(obj3));
console.log(obj3);