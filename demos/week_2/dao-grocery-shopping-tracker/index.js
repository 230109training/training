const { addGroceryItem, retrieveAllGroceryItems, retrieveGroceryItemById, 
    retrieveGroceryItemsByCategory, deleteGroceryItemById, updateGroceryNameById,
    updateGroceryQuantityById, updateGroceryPriceById, updateGroceryCategoryById } = require('./grocery-item-dao');
const uuid = require('uuid');

// addGroceryItem(uuid.v4(), 'celery', 10, 0.25, 'vegetable').then((data) => {
//     console.log('Adding item successful');
// }).catch((err) => {
//     console.log('An error occurred!!!')
//     console.error(err);
// });

// retrieveAllGroceryItems().then((data) => {
//     console.log('Retrieval successful');
//     console.log(data.Items);
//     console.log(typeof(data.Items)); // array object 

//     console.log(data.Items[0]);
//     console.log(data.Items[0].name);
//     console.log(data.Items[0].category);
//     console.log(data.Items[0].price);
//     console.log(data.Items[0].quantity);
//     console.log(data.Items[0].grocery_item_id);

//     console.log(data.Items[1]);
//     console.log(data.Items[1].name);
//     console.log(data.Items[1].category);
//     console.log(data.Items[1].price);
//     console.log(data.Items[1].quantity);
//     console.log(data.Items[1].grocery_item_id);
// }).catch((err) => {
//     console.log('An error occurred!!!')
//     console.error(err);
// })

// retrieveGroceryItemById('5e246c36-ad66-4f90-a94e-d4dde8d66d5e').then((data) => {
//     if (data.Item) { // If the "data" object actually has an "Item" property
//         console.log("Successfully retrieved item")
//         console.log(data.Item);
//     } else {
//         console.log("Item does not exist");
//     }
// }).catch((err) => {
//     console.log('An error occurred!!!');
//     console.error(err);
// });

// retrieveGroceryItemsByCategory('vegetable').then((data) => {
//     console.log(data);
// });

// deleteGroceryItemById('4615c8c5-f6c7-48c2-bd28-ab235f3b5e72').then(() => {
//     console.log('Successfully deleted item');
// });

// updateGroceryNameById('b5fba920-1234-47b4-85cb-5b8c086e5617', 'potato').then(() => {
//     console.log('Successfully updated item');
// });

// updateGroceryQuantityById('b5fba920-1234-47b4-85cb-5b8c086e5617', 100).then(() => {
//     console.log('Successfully updated item');
// });

// updateGroceryPriceById('b5fba920-1234-47b4-85cb-5b8c086e5617', 5.25).then(() => {
//     console.log('Successfully updated item');
// });

updateGroceryCategoryById('b5fba920-1234-47b4-85cb-5b8c086e5617', 'test_category').then(() => {
    console.log('Successfully updated item');
});
