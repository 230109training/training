const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello from PersonRouter");
});

router.get('/person', (req, res) => {
    res.send({
        message: "Person Router"
    })
})

module.exports = router;