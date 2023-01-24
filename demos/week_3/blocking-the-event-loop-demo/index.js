const express = require('express');
const crypto = require('crypto');

const PORT = 3000;
const app = express();

function randomString() {
    const stringSize = 20;
    return crypto.randomBytes(stringSize).toString();
}

app.get('/blocking-endpoint', async (req, res) => {
    const hash = crypto.createHash('sha256');

    for (let i = 0; i < 10000000; i++) {
        hash.update(randomString());
    }

    res.send({
        "message": "Finished long running task"
    });
});

app.get('/non-blocking-endpoint', async (req, res) => {
    const hash = crypto.createHash('sha256');

    async function unblockUsingTimer() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 0);
        });
    }

    for (let i = 0; i < 10000000; i++) {
        hash.update(randomString());
        await unblockUsingTimer();
    }

    res.send({
        "message": "Finished long running task"
    });
});

app.get('/hello', (req, res) => {
    res.send({
        "message": "Hello world!"
    });
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})