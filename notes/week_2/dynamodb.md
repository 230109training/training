# DynamoDB
DynamoDB is a NoSQL database that was created by AWS. It provides the ability to easily scale up to large amounts of traffic.

## SQL v. NoSQL
SQL (Structured query language) and NoSQL (Not Only SQL) are two types of databases that are used to store and retrieve data

Some differences between SQL and NoSQL include
- Structure: SQL databases are based on a relational model, where data is stored in tables with rows and columns, and relationships are defined between tables using foreign keys. NoSQL databases are based on a variety of different models, such as document, key-value, graph, and column databases. DynamoDB is a "key-value" store with some additional support for document-like data
- Scaling: SQL databases are scaled vertically, while NoSQL databases like DynamoDB are scaled horizontally. DynamoDB accomplishes horizontal scaling through partitions. DynamoDB is therefore better suited for handling large amounts of data and high amounts of traffic compared to SQL. DynamoDB is based around data that is split into different partitions (servers) that can be scaled outwards, and data can be quickly and efficiently accessed using the "consistent hashing algorithm"
- Flexibility: SQL databases have a fixed schema, meaning the structure of the data must be defined in advance, and the schema cannot be changed without modifying the existing data. NoSQL databases, however, have a dynamic schema, which allows for immense flexibility, but you have the added complication of making sure the data is in "good shape" in this case.
- Query language: SQL databases use SQL as the query language for interacting with the database. On the other hand, DynamoDB does NOT have a query language at all. Instead, we must interact with the database using an API (such as aws-sdk) for the programming language we are using (ex. Java, JavaScript, Python, etc..)

## DynamoDB Table Structure
- Data in DynamoDB is stored as items contained in tables
- A table is a logical collection of items (ex. users table would store "user items")
- Items have attributes - identifiers for each value that an item consists of
- When creating a table, a **primary key** must be defined
    - A primary key is a unique identifier used to identify an item in a table. A primary key is either composed of 1 or 2 attributes
        - Partition Key (required): the partition key is known also as a "hash key" used for identifying what partition an item belongs to when you run the partition key through the hashing algorithm. The partition key is used to distribute data across multiple partitions, which allows for horizontal scaling of the table
        - Sort key (optional): the sort key is also known as a "range key". It is optional, but if used, it can be combined with the partition key to create a unique identifier for each item in the table. The sort key is used to efficiently perform queries on ranges of data that have differing sort keys, but the same partition key
            - Ex. notes table
                - Primary key
                    - user_id (partition key)
                    - time_created (sort key)
                        - If we want to efficiently query for notes created by user_id 1 created between 1 second and 10 seconds, we can utilize the partition key and sort key together
                - There can only be one item with user_id 1 and time_created 1673992464
                - There can however be multiple items with user_id 1 (they just need to have different time_created values)
                    - It's the combination of the partition key AND sort key that must be unique
            - Ex. users table
                - user_id (partition key)
                    - The users table ONLY has a partition key and no sort key
                    - This means that every item must have a unique user_id in the users table

## Secondary Indices
- An index is a data structure that contains a subset of attributes from the table that enables us to efficiently query data from a table using a different set of keys
- When we create a table, we can think of the primary key as being part of the "primary index"
- We can also create "secondary indices"
    - When creating a secondary index, we must specify which attributes we want to include in the index as keys
    - Whenever we add, modify, or delete items to/from the table, the indices will also be updated automatically
- Two different types of secondary indices
    - Local secondary index (LSI): Can only be created at the time of creating the DynamoDB table
        - A LSI has the same partition key as the table, but a different sort key
        - We should only utilize local secondary indices whenever we want to have multiple sort keys that utilize the table's partition key
    - Global secondary index (GSI): Unlike LSIs, which can only be created at the time of creating a table, a GSI can be created at any time. GSIs can be based on a different partition key (required) and sort key (optional) than the table
        - A GSI is kind of like an "alternative primary key"
        - We should utilize GSIs when we want to be able to efficiently query a set of data based on a different partition key

## DynamoDB Operations
- put, update, get, delete (single items)
    - put: create an item or fully replace an item with an existing primary key
        - If item already exists with given primary key, it will essentially delete the old item and replace it with a new item
    - update: update some attributes for an item with an existing primary key
        - If item with primary key doesn't exist, then it will actually create a new item with the "updated attributes"
    - get: retrieve an item with a given primary key
        - if item doesn't exist, it will return a blank object (not an error)
    - delete: delete an item with a given primary key
        - if item doesn't exist, it simply won't really do anything (no error)
- query and scan (retrieving groups of items)
    - query: return all values with a given partition key
        - We can either query the partition key of the table itself (part of the primary key) OR we can query the partition key of an index (such as global secondary index)
        - Important point: query allows for efficient access of data in O(1) time complexity
        - We can utilize filter expressions as well if we want to further refine results
    - scan: access every single item in the given table or index
        - Inefficient! Time complexity is O(n)
        - Can use filter expressions to filter data
            - Somebody really inexperienced might use scan and then filter for everything
            - However, this is a very NAIVE approach because of the inefficiencies mentioned
            - We should think about creating global indices for anything that we want to efficiently query over

## Query v. Scan grocery_items
- ex. grocery_items table
    - grocery_item_id (partition key)
    - name
    - quantity
    - price
    - category
- Naive approach to querying for all items in a given category (ex. meat)
    - Scan the table and filter based on category equal to "meat"
    - O(n)
- Smart approach
    - Use query on a global secondary index that has category as the partition key
    - ex. Query category-index on category (partition key) equal to "meat"
    - O(1)
