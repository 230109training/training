const express = require('express');
const router = express.Router();

/**
 * In this example we've created the Router object using the express.Router() method and defined two endpoints
 * "/" and "/item"
 * These routes are mounted onto the server using the router object
 * For example
 * 
 * server.use('/item', itemRouter);
 * 
 * This would mean that the itemRouter endpoints are mounted on top of /item
 * So the endpoint "/" would actually look like "/item/"
 * and the endpoint "/item" would look like /item/item
 */

// Taking in queries from a url
// for example: /item/?name=Cheese
// The order matters with how routes are labeled, so be aware of that when placing your endpoints in your routes file
router.get('/query', (req, res) => {
    console.log(req.query.name);
    res.send({
        message: `Recieved Query for name: ${req.query.name}`
    });
});

router.get('/', (req, res) => {
    res.send("Hello from Item Router");
});

router.get('/item', (req, res) => {
    res.send({
        message: "Item Router"
    })
});


// Taking in params from urls
// Within the url, it would appear as /item/1 or /item/4
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.send({
        message: `Received Item ID: ${req.params.id}`
    });
});



module.exports = router;