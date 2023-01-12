const http = require('http');
const url = require('url');
const PORT = 3000; // Set port for the server


// Class for consistent items
class Items{
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Dummy database
let DUMMY_ITEMS = [
    new Items(1, "Apple", 1),
    new Items(2, "Banana", 2),
    new Items(3, "Milk", 3),
    new Items(4, "Cheese", 4),
]

// First Example

// const server = http.createServer((req, res) => {
//     let query = url.parse(req.url, true).query;
//     console.log(query);
//     switch(req.url){
//         case '/':
//             res.setHeader('Content-Type', 'text/html');
//             res.writeHead(200);
//             res.end("<h1>Grocery Shop</h1>");
//             break;
//         case '/item':
//             res.setHeader('Content-Type', 'application/json');
//             res.writeHead(200);
//             res.end(JSON.stringify(DUMMY_ITEMS));
//             break;
//         case `/?name=${query.name}`:
//             res.setHeader('Content-Type', 'application/json');
//             res.writeHead(200);
//             let item = DUMMY_ITEMS.filter((item) => item.name === query.name)[0];
//             res.end(JSON.stringify(item));
//             break;
//         default:
//             res.writeHead(404);
//             res.end("<h1>Resource not Found</h1>");
//     }
//     res.end();
// });


// Request Listener to handle the initial request
// Provide different handlers based on the request method
const requestListener = (req, res) => {
    switch(req.method){
        case "GET":
            getHandler(req, res);
            break;
        case "POST":
            postHandler(req, res);
            break;
        default:
            res.end("<h1>Error</h1>");
    }
}

// Get handler for handling get requests
const getHandler = (req, res) => {
    // using the node url module to check if there are any queries passed in
    let query = url.parse(req.url, true).query;
    console.log(query);
    // Switch function should include a default if the url is not found
    switch(req.url){
        // root domain
        case "/":
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end("<h1>Grocery Store</h1>");
            break;
        // query based on item endpoint, using template literal for added flexibility
        case `/item/?name=${query.name}`:
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            // Filter function for finding the item based on its name
            let item = DUMMY_ITEMS.filter((item) => item.name === query.name)[0];
            res.end(JSON.stringify(item));
            break;
        default:
            res.writeHead(404);
            res.end("<h1>Resource not Found</h1>");
    }
}

// Post handler for handling post requests
const postHandler = (req, res) => {
    // Assume content response will be html unless specified within the cases
    res.setHeader('Content-Type', 'text/html');
    switch(req.url){
        // /item endpoint
        case "/item":
            // data must be read fully, using the req.on for 'data' and 'end'
            let body = '';
            req.on('data', chunk=>{
                body += chunk;
            })
            // once 'end' is received, we can then use the body string
            req.on('end', () =>{
                let item = JSON.parse(body);
                // validate if the body is not broken
                if(validateItem(item)){
                    
                    let id = DUMMY_ITEMS.length + 1;
                    DUMMY_ITEMS.push(new Items(id, item.name, item.price));
                    console.log(DUMMY_ITEMS);
                    res.end("<h1>Got it!</h1>");
                }else{
                    res.end("<h1>Invalid Item name or price</h1>");
                }
            })
            break;
        default:
            res.writeHead(404);
            res.end("<h1>Resource not Found</h1>");
    }
}

const validateItem = (item) => {
    return !(item.name.length <=1 || item.prince <= 0);
}

const server = http.createServer(requestListener);

server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running on port ${PORT}`);
});