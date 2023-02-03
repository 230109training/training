const { myServiceFunction, retrieveReimbursements } = require('./service');

const { getData, getAllReimbursements } = require('./dao');
jest.mock('./dao', function() { // Mock module
    return {
        getData: jest.fn(),
        getAllReimbursements: jest.fn()
    }
}); // Initial setup to mock the dao.js module

// This test is intended to be a unit test
// Without mocking, this test will currently fail, because getData(), which myServiceFunction() invokes, is throwing
// a Database connection error
// However, the unit test should focus purely on the logic inside of myServiceFunction only
// The only reason it is failing is because the dependency (getData) is failing
// Therefore, by mocking getData, we can avoid this problem when performing unit tests
test('myServiceFunction should return data (string) with 5 exclamation marks appended to the end', () => {
    // Arrange
    // getData.mockReturnValue <- change the mock return value for every subsequent test case
    // getData.mockReturnValueOnce <- have the mock return value only for this test
    getData.mockReturnValueOnce('abc'); // fake data

    // Act
    const returnData = myServiceFunction();

    // Assert
    expect(returnData).toEqual('abc!!!!!');
});

test('retrieveAllReimbursements should return an array of reimbursements', () => {
    // Arrange
    const fakeData = [
        { 
            id: 1, 
            amount: 10, 
            description: 'fake reimbursement', 
            status: 'pending', 
            submitter: 'user123'}, 
        {
            id: 2,
            amount: 100,
            description: 'another fake reimbursement',
            status: 'approved',
            submitter: 'john_doe'
        }];

    getAllReimbursements.mockReturnValueOnce(fakeData);

    // Act
    const returnValue = retrieveReimbursements();

    // Assert
    const expectedData = [
        { 
            id: 1, 
            amount: 10, 
            description: 'fake reimbursement', 
            status: 'pending', 
            submitter: 'user123'}, 
        {
            id: 2,
            amount: 100,
            description: 'another fake reimbursement',
            status: 'approved',
            submitter: 'john_doe'
        }];

    // Be aware of the difference between toBe and toEqual
    // toBe will compare whether the values of two primitives (number, string, boolean) are the same or not
    // But in the case of objects, it will check if the objects are the exact same object
    // toEqual will actually compare whether two different objects have the same properties or not
    expect(returnValue).toEqual(expectedData);
});