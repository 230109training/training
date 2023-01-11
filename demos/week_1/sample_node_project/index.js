const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000');
}); // The server will listen on port 3000 for incoming HTTP requests
