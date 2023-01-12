const promptSync = require('prompt-sync'); // npm package import
const fileUtility = require('./file-utility'); // local module import
const prompt = promptSync();

let groceryItems = fileUtility.readFromFileIfFileExists('./items.json'); // Empty array if file doesn't exist
// or populated array if file exists

while (true) {
    console.log('=== Welcome to the Grocery Shopping Tracker ===');
    console.log('1. Exit');
    console.log('2. Add Grocery Item');
    console.log('3. View Items');
    console.log('4. Save list to file');

    const input = prompt('Enter choice: ');

    if (input === '1') {
        break; // break out of loop
    } else if (input === '2') {
        const itemName = prompt('Enter item name: ')
        const itemQuantity = Number(prompt('Enter item quantity: '));
        const itemPrice = Number(prompt('Enter item price: '));

        // Creating object with 3 properties and adding to array
        groceryItems.push({
            itemName, // "itemName": itemName
            itemQuantity,
            itemPrice
        });
    } else if (input === '3') {
        console.log(groceryItems);
    } else if (input === '4') {
        fileUtility.convertObjectToJsonAndSaveJsonToFile('./items.json', groceryItems);
    }
}
