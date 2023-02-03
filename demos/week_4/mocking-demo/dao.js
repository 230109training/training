function getData() {
    // Pretend there is real logic for connecting to the database and retrieving data from database
    // return "real data from database";
    throw new Error("Database connection failed!");
}

function getAllReimbursements() {
    throw new Error("Database connection failed!");
}

module.exports = {
    getData,
    getAllReimbursements
}