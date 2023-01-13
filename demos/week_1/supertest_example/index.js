const http = require('http');
const PORT = 9090;

const requestListener = (req, res) => {
    switch(req.method){
        case "GET":
            getHandler(req,res);
            break;
        default:
            res.end("<h1>Invalid Request</h1>");
    }
}

const getHandler = (req, res) => {
    switch(req.url){
        case "/message":
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify({
                message: 'success!',
                status: 200
            }));
            break;
        default:
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(404);
            res.end(JSON.stringify({
                message: 'Resource not found',
                status: 404
            }));
    }
}

const server = http.createServer(requestListener);

server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = server;