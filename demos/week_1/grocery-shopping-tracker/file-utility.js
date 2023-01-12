const fs = require('fs'); // node module import

// Input: path
// Output: Object
function readFromFileIfFileExists(path) {
    if(fs.existsSync(path)) {
        const jsonString = fs.readFileSync(path, 'utf-8');
        return JSON.parse(jsonString);
    }

    return [];
}

function convertObjectToJsonAndSaveJsonToFile(path, obj) {
    const jsonString = JSON.stringify(obj);
    fs.writeFileSync(path, jsonString);
}

// module.exports is a special object that represents what actually gets imported when another file
// uses "require(...)" to import from this file
// You can choose what to therefore "export" from the file

// module.exports.readFromFileIfFileExists = readFromFileIfFileExists;
// module.exports.convertObjectToJsonAndSaveJsonToFile = convertObjectToJsonAndSaveJsonToFile;
module.exports = {
    readFromFileIfFileExists, // Shorthand in JS for "readFromFileIfFileExists": readFromFileIfFileExists
    convertObjectToJsonAndSaveJsonToFile // Shorthand in JS for "convertObjectToJsonAndSaveJsonToFile": convertObjectToJsonAndSaveJsonToFile
}