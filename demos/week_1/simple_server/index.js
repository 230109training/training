const http = require('http');
const url = require('url');
const PORT = 3000; // Set port for the server

class Items{
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

let DUMMY_ITEMS = [
    new Items(1, "Apple", 1),
    new Items(2, "Banana", 2),
    new Items(3, "Milk", 3),
    new Items(4, "Cheese", 4),
]

// CRUD
// Create, Read, Update, Delete

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

const getHandler = (req, res) => {
    let query = url.parse(req.url, true).query;
    console.log(query);
    switch(req.url){
        case "/":
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end("<h1>Grocery Store</h1>");
            break;
        case `/item/?name=${query.name}`:
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            let item = DUMMY_ITEMS.filter((item) => item.name === query.name)[0];
            res.end(JSON.stringify(item));
            break;
        default:
            res.writeHead(404);
            res.end("<h1>Resource not Found</h1>");
    }
}

const postHandler = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    switch(req.url){
        case "/item":
            let body = '';
            req.on('data', chunk=>{
                body += chunk;
            })
            req.on('end', () =>{
                let item = JSON.parse(body);
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
    if(item.name.length <= 1 || item.price <= 0){
        return false;
    }else{
        return true;
    }
}

const server = http.createServer(requestListener);



server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running on port ${PORT}`);
});
