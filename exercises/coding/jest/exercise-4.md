# Jest Exercise 4 (Using Mocks)

## Description

This exercise involves using Jest's mocking functionality to test a function called `getData`. The function has been provided for you.

```javascript
const axios = require('axios');

function getData() {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.data)
    .catch(error => {
        console.error(error);
        return null;
    });
}
```

## Approach

1. Use Jest's mocking functionality to mock the axios module and test the behavior of the `getData` function when the HTTP request succeeds or fails.
2. Write test cases using Jest to verify that the `getData` function works correctly for different HTTP response codes.

## Hints

1. Use Jest's `jest.mock` function to mock the axios module.
2. Write test cases to ensure that the `getData` function returns the expected output when the mocked axios module resolves or rejects the HTTP request.
3. Use Jest's expect function to check the output of the `getData` function.

## Deliverables

1. A set of test cases using Jest's mocking functionality to test the behavior of the getData function when the HTTP request succeeds or fails
2. A loom recording titled `Jest Exercise 3 (Async/Await) firstName lastName`
    - Softskills and Presentation
        - Be centered on the camera
        - Look into the camera, not at the screen
            - This how you emulate eye contact while on camera
        - This should be professionally presented
            - You do not need to wear professional clothes
    - Introduce what you have done
    - Explain how you approached it, and why you chose the decisions you did
    - Talk about what you used in the exercise (React features) and why
    - Provide a simple walkthrough, with first a demonstration of the component and then an explanation of its code
        - In the explanation, use technical keywords as much as possible instead of just descriptions
    - Treat this as a product delivery to a manager