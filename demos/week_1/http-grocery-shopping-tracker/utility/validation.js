function validateGroceryItem(item) {
    // 1. Check if name has length greater than 1
    // 2. Check if quantity > 0
    // 3. Check if price > 0

    // if (item.name.length > 1 && quantity > 0 && price > 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return item.name.length > 1 && item.quantity > 0 && item.price > 0;
}

module.exports = {
    validateGroceryItem
};