const http = require('http');
const fs = require('fs');
const { validateGroceryItem } = require('./utilty/validation');

const PORT = 8080;

let groceries = [];

// Callback function: a function that is passed as an argument into another function
// that is being called, and the function being passed in will be called in the future

// Create server
const server = http.createServer((req, res) => { 
    if (req.method === 'POST' && req.url === '/grocery') {
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            const groceryItem = JSON.parse(data);

            if (validateGroceryItem(groceryItem)) {
                groceries.push(groceryItem);
                res.writeHead(201); // 201 Created
                res.end(JSON.stringify(groceryItem));
            } else {
                res.writeHead(400); // 400 Bad Request
                res.end(JSON.stringify({
                    message: "Item being added was improperly formatted"
                }));
            }
        });
    } else if (req.method === 'GET' && req.url === '/grocery') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(groceries));
    } else if (req.method === 'POST' && req.url === '/grocery/save') {
        fs.writeFile('./data.json', JSON.stringify(groceries), (err) => {
            console.log(err);
        });

        res.end();
    } else if (req.method === 'POST' && req.url === '/grocery/load') {
        const data = fs.readFileSync('./data.json');
        groceries = JSON.parse(data);
        res.end();
    } else {
        res.writeHead(404); // set 404 status code
        res.end('Endpoint not mapped');
    }
}); // We are calling the createServer method and 
// we are passing in a callback function that will be called every time a request
// is received by the server

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
}); // callback function only gets called when things in the background are finally done
// for setting up the ability to listen for incoming network communications
// Example of asynchronous JavaScript

console.log('Done with all of the above operations');

// Asynchronous is all about the ability to run all of the other code first without having
// long-running operations block the execution of the code
