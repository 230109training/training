const express = require('express');
const bodyParser = require('body-parser');

// Router imports
const authRouter = require('./routes/auth-routes');
const reimbRouter = require('./routes/reimbursement-routes');

const PORT = 3000;
const app = express(); // app represents the server as an object

app.use(bodyParser.json());
app.use(authRouter); // Gives the server access to the POST /login and POST /users routes defined in authRouter
app.use(reimbRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});