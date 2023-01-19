const express = require("express");
const router = express.Router();
const movieDAO = require('../repository/movieDAO');

const aws = require("aws-sdk");
const uuid = require("uuid");
aws.config.update({
  region: "us-east-1",
});
const docClient = new aws.DynamoDB.DocumentClient();

// CRUD
// Create, Read, Update, Delete

router.get("/", (req, res) => {
  res.send("Home Page");
});

// READ
// Read all and read by ID
router.get("/movie", async (req, res) => {
//   const params = {
//     TableName: "movie_table",
//   };

//   let scanResults = [];
//   let items;

//   do {
//     items = await docClient.scan(params).promise();
//     items.Items.forEach((item) => scanResults.push(item));
//     params.ExclusiveStartKey = items.LastEvaluatedKey;
//   } while (typeof items.LastEvaluatedKey !== "undefined");
    let items = await movieDAO.getAllMovies();
    res.send(items);
});

router.get("/movie/:id", (req, res) => {
//   const params = {
//     TableName: "movie_table",
//     Key: {
//       movie_id: req.params.id,
//     },
//   };

//   // Promises need to be used here because the call to the database is asynchronous
//   // If you do not handle it asynchronously, then the response will be empty as the data object has not been filled yet
//   // const data = docClient.get(params, (err, data) => {
//   //     if(err){
//   //         console.error(err);
//   //     }else{
//   //         return data;
//   //     }
//   // });

//   // res.send(data.Item);

//   docClient
//     .get(params)
//     .promise()
//     .then((data) => {
//       if (typeof data.Item === "undefined") {
//         // fail code for not getting item
//         res.send({
//           message: "item not found!",
//         });
//       } else {
//         res.send(data.Item);
//       }
//     });

    movieDAO.getMovieById(req.params.id).then((data) => {
        res.send(data.Item);
    });
});

// CREATE
// CREATE NEW MOVIE
router.post("/movie", (req, res) => {
//   const params = {
//     TableName: "movie_table",
//     Item: {
//       movie_id: uuid.v4(),
//       name: req.body.name,
//       year: req.body.year,
//       rating: req.body.rating,
//     },
//   };

//   docClient
//     .put(params)
//     .promise()
//     .then(() => {
//       res.send("Successfully added item!");
//     })
//     .catch((err) => {
//       res.send({
//         message: err,
//       });
//     });

    movieDAO.insertNewMovie({
        name: req.body.name,
        year: req.body.year,
        rating: req.body.rating
    }).then(() => {
        res.send("Successfully added movie!");
    })
});

// UPDATE
// UPDATE MOVIE BY ID
router.put("/movie", (req, res) => {
  const params = {
    TableName: "movie_table",
    Key: {
      movie_id: req.body.movie_id,
    },
    UpdateExpression: "set #n = :val1, #y = :val2, #r = :val3",
    ExpressionAttributeNames: {
      "#n": "name",
      "#y": "year",
      "#r": "rating",
    },
    ExpressionAttributeValues: {
      ":val1": req.body.name,
      ":val2": req.body.year,
      ":val3": req.body.rating,
    },
  };

  docClient
    .update(params)
    .promise()
    .then(() => {
      res.send("Successfully Updated Item");
    });
});

// DELETE
// DELETE MOVIE BY ID
router.delete("/movie/:id", (req, res) => {
  const params = {
    TableName: "movie_table",
    Key: {
      movie_id: req.params.id,
    },
  };
  docClient
    .delete(params)
    .promise()
    .then(() => {
      res.send(`Successfully deleted item with id ${req.params.id}`);
    });
});

module.exports = router;
