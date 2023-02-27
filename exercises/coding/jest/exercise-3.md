# Jest Exercise 3 (Async/Await)

## Description

This exercise involves using Jest's async/await functionality to test a function called `fetchData`. The code that will be tested has been provided for you.

```javascript
function fetchData(value, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error(`${value}`));
      } else {
        resolve(value);
      }
    }, 1000);
  });
}

module.exports = fetchData;
```

## Approach

1. Use Jest's async/await functionality to write test cases that verify that the `fetchData` function works correctly when the Promise resolves or rejects.

## Hints

1. Use Jest's async and await keywords to handle the Promise returned by the `fetchData` function.
2. Write test cases to check the function's behavior when the Promise resolves and rejects.
3. Use Jest's `expect` function to check the output of the fetchData function.

## Deliverables

1. A set of test cases using Jest's async/await functionality to verify that the fetchData function works correctly when the Promise resolves or rejects.
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
