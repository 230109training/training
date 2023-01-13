const DUMMY_PEOPLE = require('./dummyPeople');
const fs = require('fs');
const logger = require('../util/logger').fileLogger;
// CRUD

// CREATE
const insertNewPerson = (newPerson) => {
    DUMMY_PEOPLE.push(newPerson);
    fs.writeFileSync('./repository/people.json', JSON.stringify(DUMMY_PEOPLE), (err) => {
        logger.error(err);
    })
}

// READ
const getPersonByName = (personName) => {
    let person = DUMMY_PEOPLE.filter((person) => person.name === personName)[0];
    if(person){
        return person;
    }else{
        return null;
    }
}

// UPDATE

// DELETE


const saveToDatabase = (NEW_DUMMY_DATA) => {
    fs
}

module.exports = {
    getPersonByName,
    insertNewPerson
}