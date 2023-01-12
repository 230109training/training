const peopleDAO = require('../repository/peopleDAO');
const postHandler = (req, res) => {
    switch(req.url){
        case "/person":
            // res.setHeader('Content-Type', 'text/html');
            // res.writeHead(200);
            // res.end("<h1>Got the post request to person </h1>");
            let body = '';
            req.on('data', chunk => {
                body += chunk;
            });
            req.on('end', () => {
                // do something with the data
                // first validate it
                let parsedPerson = JSON.parse(body);
                if(validateNewPerson(parsedPerson)){
                    peopleDAO.insertNewPerson(parsedPerson)
                    res.setHeader('Content-Type', 'text/html');
                    res.writeHead(201);
                    res.end("<h1>Person Received!</h1>");
                }else{
                    res.setHeader('Content-Type', 'text/html');
                    res.writeHead(406);
                    res.end("<h1>Invalid Person Name, Age, or Hair color!</h1>");
                }
            })
            break;
        default:
            res.writeHead(404);
            res.end("<h1>Resource not found</h1>");
    }
};

const validateNewPerson = (person) => {
    return !(person.name.length <= 1 || person.age <= 0 || person.hairColor.length <= 1)
}

module.exports = postHandler;