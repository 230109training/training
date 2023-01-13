const mathOperations = require('./index');

test('adding 1 + 2 should return 3', () => {
    // AAA
    // Arrange, Act, Assert

    /**
     * Arrange
     * This is where the tests initial conditions are setup.
     * This includes creating any objects or data that are needed for the tests, and setting them into the state required for the test
     */

    let input1 = 1;
    let input2 = 2;

    /**
     * Act
     * This is where the code under test is executed. This can include calling a method, or getting a property value
     */

    let result = mathOperations.sum(input1, input2);

    /**
     * Assert
     * This is where the test's expected outcome is checked.
     * This includes verifying that the code under test has produced the expected results, and that no unexpected exceptions were thrown
     */

    expect(result).toBe(3);
})

// // // Failing test example
// // test('adding 4 + 5 should be 9', () => {
// //     // Arrange and Act
// //     let result = mathOperations.sum(4, 5);

// //     // assert
// //     expect(result).toBe(90);
// // })

// // Hooks - setups and teardown
// /**
//  * There are 4 hoooks
//  * beforeEach and afterEach - executed before and after each test in the test suite
//  * beforeAll and afterAll - Executed just once for each test suite
//  */
// describe('Calculator Tests', () => {

//     let input1 = 0;
//     let input2 = 0;

//     beforeAll(() => {
//         console.log("beforeAll Called");
//     });

//     afterAll(() => {
//         console.log("afterAll called");
//     });

//     beforeEach(() => {
//         input1 = 1;
//         input2 = 2;
//         console.log("beforeEach called");
//     })

//     afterEach(() => {
//         console.log("afterEach called");
//     });

//     test('adding 1 + 2 should return 3', () => {
//         // arrange and act
//         let result = mathOperations.sum(input1, input2);

//         // assert
//         expect(result).toBe(3);
//         expect(result).not.toBe(5);
//     });
//     test('subtracting 2 from 10 should return 8', () => {
//         // arrange and act
//         let result = mathOperations.diff(10, 2);

//         // assert
//         expect(result).toBe(8);
//         expect(result).not.toBe(4);
//         expect(result).toBeGreaterThanOrEqual(0);
//         expect(result).toBeGreaterThan(4);
//     });
//     // test('Multiplying 3 by 10 should return 30', () => {
//     //     // arrange and act
//     //     let result = mathOperations.product(3, 10);

//     //     // assert
//     //     expect(result).toBe(30);
//     //     expect(result).not.toBe(40);
//     //     expect(result).toBeGreaterThanOrEqual(20);
//     //     expect(result).toBeGreaterThan(0);
//     // })
// })

