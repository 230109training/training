const json = require('jsonwebtoken');

exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            "message": "Login handler invoked!"
        })
    }
}
