const url = require('url');
const peopleDAO = require('../repository/peopleDAO');
const logger = require('../util/logger').fileLogger;

const getHandler = (req, res) => {
    let query = url.parse(req.url, true).query;
    switch(req.url){
        case "/":
            // logger.info(`${req.method} recevied to ${req.url}`);
            res.setHeader("Content-Type", 'text/html');
            res.writeHead(200);
            res.end("<h1>People Page</h1>");
            break;
        case "/person":
            // logger.info(`${req.method} recevied to ${req.url}`);
            res.setHeader("Content-Type", 'text/html');
            res.writeHead(200);
            res.end("<h1>Person Page</h1>");
            break;
        case `/person/?name=${query.name}`:
            // logger.info(`${req.method} recevied to ${req.url}`);
            res.setHeader("Content-Type", 'text/html');
            let person = peopleDAO.getPersonByName(query.name);
            if(!person){
                logger.info(`Invalid name query received : ${query.name}`);
                res.writeHead(404);
                res.end("<h1>Invalid name of person</h1>");
            }else{
                logger.info(`Name Query successful: ${person}`);
                res.setHeader("Content-Type", 'application/json');
                res.writeHead(200);
                res.end(JSON.stringify(person));
            }
            break;
        default:
            logger.warn("GET Request received to invalid endpoint")
            res.writeHead(404);
            res.end("<h1>Resource not found</h1>");
    }
}

module.exports = getHandler;