const logger = require('../util/logger');
const getHandler = require('./getHandler');
const postHandler = require('./postHandler');
const requestListener = (req, res) => {
    logger.fileLogger.info(`${req.method} recevied to ${req.url}`);
    // res.setHeader('Content-Type', 'text/html');
    // res.writeHeader(200);
    // res.end("<h1>Hello World</h1>");
    switch(req.method){
        case "GET":
            getHandler(req, res);
            break;
        case "POST":
            postHandler(req, res);
            break;
        case "PUT":
            res.writeHead(200);
            res.end();
            break;
        case "DELETE":
            res.writeHead(200);
            res.end();
            break;
        default:
            logger.logger.error("Invalid HTTP Request Received");
            res.writeHead(200);
            res.end("<h1>Bad request</h1>")
    }
}

module.exports = requestListener;