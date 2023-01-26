const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({
        message: "Hello There"
    });
});

const actualUsername = "user1";
const actualPassword = "pass1";

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if(username === actualUsername && password === actualPassword){
        res.send({
            message: "logged in!"
        });
    }else{
        res.send({
            message: "invalid username or password!"
        });
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});