const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({ // S3 bucket frontend origin, EC2 (nginx) frontend origin 
    origin: ['http://simple-website-432434234123.s3-website-us-east-1.amazonaws.com:80', 
    'http://3.239.80.24:80'] 
})); // CORS is a security setting in the browser that prevents the browser from making requests
// to the backend in case a user visited a malicious website
// The browser will first send a "pre-flight" request to the backend, and ask the backend
// whether there are any cross-origins that are considered "trusted"
// Once the backend sends the list of cross-origins that are "trusted" back to the frontend, the browser
// then checks if the location where the frontend is being hosted matches that list

app.get('/test', (req, res) => {
    return res.send({
        "message": "Hello there!"
    });
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});