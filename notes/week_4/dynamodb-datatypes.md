# DynamoDB Datatypes

1. Scalar datatypes
    - String
    - Number (integer and floating-point)
    - Binary
        - Applications must encode binary values in base64-encoded format before sending them to DynamoDB
        - Used to store binary data such as images, audio, and encrypted data
        - Not recommended considering size and performance limitations of DynamoDB for handling large files
    - Boolean
    - Null
2. Collection datatypes
    - List (ordered collection of scalar values)
        - No restrictions on datatypes stored in a list
    - Map (unordered collection of key-value pairs)
        - A map is like a JSON object
    - Set (unordered collection of unique scalar values)
        - Can store
            - numbers
            - strings
            - binary values
