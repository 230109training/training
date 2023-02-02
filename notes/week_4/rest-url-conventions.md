# REST URL Conventions
REST (REpresentational State Transfer) is a series of conventions on how to build an HTTP-based API

The most important points to remember about REST is regarding what REST revolves around
1. Resources: A resource is something that is represented on the server (noun)
    - URL represents a resource or collection of resources
    - Types of resources:
        1. Singleton resources
            - `/reimbursements/abcd-efgh-ijkl`
            - This is a single reimbursement identified by its unique id
        2. Collection resources
            - `/reimbursements`
            - All of the reimbursements
        3. Sub-collection and sub-singleton resources
            - Theoretically, if you have a hierarchy, you should represent it as follows
            - Sub-singleton resource
                - `/users/abcd/reimbursements/abcd-efgh-ijkl`
                - It represents a reimbursement with an id of abcd-efgh-ijkl belonging to user abcd
            - Sub-collection resource
                - `/users/abcd/reimbursements`
                - It represents all reimbursements belonging to user abcd
2. Operations: An action that we perform on a resource (verb)
    - Conveniently, HTTP provides us with **HTTP verbs** such as GET, POST, PUT, PATCH, DELETE

## Do's and Don'ts
* Do not use trailing forward / in URLs
* Do use hyphens to separate words
    - `http://api.website.com/bank-accounts
    - Do not use underscores
* Do not use uppercase letters in URLs
    - Everything should be lowercase
* Do not use file extensions in URLs
* Do not use verbs in URLs
    - Incorrect: `http://api.website.com/add-bank-account`
* If filtering a collection of data, do use query parameters
    - Incorrect: `http://api.website.com/reimbursements/pending`
    - Correct: `http://api.website.com/reimbursements?status=pending`
    - syntax: `<URL>?queryparam1=value1&queryparam2=value2&queryparam3=value3&queryparam4=value4`
    - Caveat from a practical standpoint: query parameters are NOT part of the URL
        - If you are mapping endpoints in your code `ex. app.get('/reimbursements')`, notice that the query param is not included in the mapping
            - `if (req.query.status) {}` would need to be used to check if there is a query parameter supplied or not

# Summary
All of the above relates to the first constraint of REST: **UNIFORM INTERFACE**