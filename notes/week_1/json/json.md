# JavaScript Object Notation (JSON)
JSON stands for JavaScript Object Notation. It is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. JSON is a text format that is language-independent but uses conventions that are familiar to those who program in JavaScript.

JSON is primarily used to transmit data between a server and other servers, or server and client. JSON is a modern alternative to another format of data-interchange called XML (Extensible Markup Language). JSON data is represented as a collection of key-value pairs, similar to a JS object or a Python dictionary. The keys must be strings, and the values can be strings, numbers, booleans, arrays, or other JSON objects.

Here is an example of a JSON object
```json
{
    "firstName": "John",
    "lastName": "Doe",
    "age": 30,
    "isStudent": true,
    "courses": [ "Math", "Physics", "Biology" ]
}
```

Scenario: We have built a frontend React application and we are logging in. When we click the log in button, the following JSON is sent from the frontend app to the server
```json
{
    "username": "user123",
    "password": "password123"
}
```

The strength of JSON is its flexibility. JSON can be used to transmit a wide variety of data and can be used with any programming language that has a JSON library that can be used to encode and decode JSON.

## JSON API in JavaScript
- JSON.stringify(): enables us to turn a JS object into a JSON string
- JSON.parse(jsonString): enables us to turn a JSON string back into a JavaScript object that is then returned by the function