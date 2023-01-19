const express = require('express');
const server = express();
const PORT = 3000;
const itemRouter = require('./routes/itemRouter');
const personRouter = require('./routes/personRouter');
const movieRouter = require('./routes/movieRouter');
const bodyParser = require('body-parser');

/**
 * Routing refers to the process of determining how an application should respond to a client request to a particular endpoint, based on the request's HTTP method and the endpoint's URL
 * 
 * An Express Router is a middleware function that is used to define a set of routes and how they should be handled.
 * It provides a way to organize your routes in a modular and reusable way, by allowing you to create a separate routers for different parts of your application
 * 
 */

server.use(bodyParser.json());
// server.use('/item', itemRouter);
// server.use('/person', personRouter);
server.use('/', movieRouter);

server.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`);
});