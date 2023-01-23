const jwt = require('jsonwebtoken');
const Promise = require('bluebird');

function createToken(username, role) { // Username and role are passed in, so that we can store
    // the username and role information into the token that we create
    return jwt.sign({
        "username": username,
        "role": role
    }, 'thisisasecretforsigningthetoken');
}

// This function returns a promise that contains the payload when the promise is resolved
function verifyTokenAndReturnPayload(token) {
    jwt.verify = Promise.promisify(jwt.verify); // take the verify function, which has an argument for an (err, data) => {} 
    // callback function and instead turn it into a function that returns a promise

    return jwt.verify(token, 'thisisasecretforsigningthetoken'); // This function now returns a promise instead of using
    // the (err, data) => {} callback function
}

// // Common practice in software development is writing temporary lines of code that will execute the particular
// // segment (such as a function) and also using console.log to see the output
// // "Breadcrumb statements"
// const token = createToken('user123', 'manager');
// console.log(token);
// verifyTokenAndReturnPayload('obviouslyinvalidtoken').then((payload) => {
//     console.log(payload);
// }).catch((err) => {
//     console.error(err);
// });
// async function myAsyncFunction() {
//     try {
//         const payload = await verifyTokenAndReturnPayload(createToken('user123', 'employee'));

//         console.log(payload);
//     } catch(err) {
//         console.error(err);
//     }
// }

// myAsyncFunction();

module.exports = {
    createToken,
    verifyTokenAndReturnPayload
}