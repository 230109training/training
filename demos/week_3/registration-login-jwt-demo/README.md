# Registration/Login (with JWTs) Documentation

## Startup
To start the application, simply run `npm install` to install all necessary node packages, and then `node index.js` to start the server. The server is configured to run on PORT 3000, but you can change the PORT number to something else

## Endpoints

### Login Endpoint
Request
- HTTP Method
    - POST
- URL
    - /login
- Headers
    - Content-Type: application/json
- Body
    ```json
    {
        "username": "user123",
        "password": "password123"
    }
    ```

Response Scenarios

1. Valid username and password provided in request body
- Status Code
    - 200 OK
- Body
    ```json
    {
        "message": "Sucessful login!",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVtcGxveWVlMTIzIiwicm9sZSI6ImVtcGxveWVlIiwiaWF0IjoxNjc0NTAzMjIxfQ.ZO1lCKDwyupbugoMzC5u8WymmuwtDTaleecz3DbcaoQ"
    }
    ```
- Headers
    - Content-Type: application/json

2. Invalid username
- Status Code
    - 400 Bad Request
- Body
    ```json
    {
        "message": "Username is invalid"
    }
    ```
- Headers
    - Content-Type: application/json

3. Invalid password, valid username
- Status Code
    - 400 Bad Request
- Body
    ```json
    {
        "message": "Invalid password!"
    }
    ```
- Headers
    - Content-Type: application/json

### Registration Endpoint
Request
- HTTP Method
    - POST
- URL
    - /users
- Headers
    - Content-Type: application/json
- Body
    ```json
    {
        "username": "newuser123",
        "password": "password123",
    }
    ```

Response Scenarios

1. Successful registration
- Status Code
    - 201 Created
- Body
    ```json
    {
        "message": "User successfully registered"
    }
    ```
- Headers
    - Content-Type: application/json

2. Unsuccessful registration because username is already taken
- Status Code
    - 400 Bad Request
- Body
    ```json
    {
        "message": "Username already taken"
    }
    ```
- Headers
    - Content-Type: application/json

3. Username is blank
4. Password provided is blank
5. Password must have numbers, letters, and a special character
6. ...

### Add Reimbursement Endpoint
Request
- HTTP Method
    - POST
- URL
    - /reimbursements
- Body
    ```json
    {
        "amount": 15.75,
        "description": "This is a description"
    }
    ```
- Headers
    - Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRvbm5hMTUiLCJyb2xlIjoiZW1wbG95ZWUiLCJpYXQiOjE2NzQ1MDUzNjd9.klfpyS-N8q3lzFkAkM4lQGGuKF3yE7c6Fa5Z_Ac4spY"
        - We need to include the JWT as part of the Authorization header so that we can authorize access to add a reimbursement
    - Content-Type: application/json

Response Scenarios

1. Successfully added reimbursement
- Status Code
    - 201 Created
- Body
    ```json
    {
        "message": "Successfully added reimbursement"
    }
    ```
- Headers
    - Content-Type: application/json

2. Token where role does not equal employee
- Status Code
    - 401 Unauthorized
- Body
    ```json
    {
        "message": "You do not have the appropriate role of 'employee' to access this operation"
    }
    ```
- Headers
    - Content-Type: application/json

3. Authorization header is not provided
- Status Code
    - 400 Bad Request
- Body 
    ```json
    {
        "message": "No Authorization header provided"
    }
    ```
- Headers
    - Content-Type: application/json

4. JWT is invalid
- Status Code
    - 400 Bad Request
- Body
    ```json
    {
        "message": "Invalid JWT"
    }
    ```
- Headers
    - Content-Type: application/json
