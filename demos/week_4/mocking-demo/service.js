const { getData, getAllReimbursements } = require('./dao');

function myServiceFunction() {
    const transformedData = getData() + "!!!!!";
    return transformedData;
}

// Sometimes your service layer functions will not contain much or any additional logic
// in those situations, you still use the service layer anyways, just to follow proper convention and organization
// In the future, it might be possible that you will add additional logic
function retrieveReimbursements() {
    return getAllReimbursements();
}

module.exports = {
    myServiceFunction,
    retrieveReimbursements
}