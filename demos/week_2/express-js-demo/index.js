/**
 * Express.js is a popular web application framework for Nodejs
 * It is built on top of the node http module, providing a higher level of abstraction for creating web applications
 * It makes it easier to handle HTTP requests and responses, route incoming requests to handlers, and setup middleware
 * 
 * MiddleWare
 * It is a function or a set of functions that sit between requests and responses in the application request-response cycle
 * 
 * Middleware is used for a number of things like;
 * 
 * - Parsing incoming request data (JSON, form data)
 * - Authenticating requests and validating user permissions
 * - Adding common headers to responses
 * - Logging requests and responses
 * - Rendering Views
 
 */
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const PORT = 3000;

server.use(bodyParser.json());

// Custom Middleware

function addDate(req, res, next){
    req.date = new Date();
    next();
}
// This will add the middleware to every endpoint
// server.use(addDate);

server.get('/', (req, res) => {
    res.send("Hello World");
})

// Middleware can be added to a specific endpoint as another parameter to the function
server.get('/item',addDate, (req, res) => {
    res.send({
        message: "Item",
        date: req.date
    });
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})