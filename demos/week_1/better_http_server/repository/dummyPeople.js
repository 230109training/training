const fs = require('fs');
const logger = require('../util/logger');

class Person{
    constructor(name, age, hairColor){
        this.name = name;
        this.age = age;
        this.hairColor = hairColor;
    }
}
let DUMMY_PEOPLE = [
    // new Person("Jake", 44, "Brown"),
    // new Person("Mike", 12, "Blue"),
    // new Person("Jane", 450, "Red"),
    // new Person("Lizz", 43, "Yello"),
];

DUMMY_PEOPLE = JSON.parse(fs.readFileSync('./repository/people.json', 'utf-8', (err, data) => {
    if(err) logger.logger.error(err);
    return data;
}))

module.exports = DUMMY_PEOPLE;