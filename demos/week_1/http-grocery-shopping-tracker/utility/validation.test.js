// const { validateGroceryItem } is an example of "object destructuring"
const { validateGroceryItem } = require('./validation');

describe('validateGroceryItem tests', () => {
    test('Expect item with name of length equal to 1 to fail validation', () => {
        let result = validateGroceryItem({
            name: 's',
            quantity: 2,
            price: 1.25
        })

        expect(result).toBe(false);
    });

    test('Expect item with quantity of -2 to fail validation', () => {
        let result = validateGroceryItem({
            name: 'salt',
            quantity: -2,
            price: 1.25
        });

        expect(result).toBe(false);
    });

    test('Expect item with price of -1.30 to fail validation', () => {
        let result = validateGroceryItem({
            name: 'salt',
            quantity: 2,
            price: -1.30
        });

        expect(result).toBe(false);
    });

    test('Expect item with name greater than 1 (salt), quantity of 2, price of 1.25 to pass validation', () => {
        let result = validateGroceryItem({
            name: 'salt',
            quantity: 2,
            price: 1.25
        });

        expect(result).toBe(true);
    });
})
