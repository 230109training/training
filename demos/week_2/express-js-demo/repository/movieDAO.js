const aws = require("aws-sdk");
const uuid = require("uuid");
aws.config.update({
  region: "us-east-1",
});
const docClient = new aws.DynamoDB.DocumentClient();

// READ

const getMovieById = (movieId) => {
  const params = {
    TableName: "movie_table",
    Key: {
      movie_id: movieId,
    },
  };

  return docClient.get(params).promise();
};

const getAllMovies = async () => {
  const params = {
    TableName: "movie_table",
  };

  let scanResults = [];
  let items;

  do {
    items = await docClient.scan(params).promise();
    items.Items.forEach((item) => scanResults.push(item));
    params.ExclusiveStartKey = items.LastEvaluatedKey;
  } while (typeof items.LastEvaluatedKey !== "undefined");

  return items;
};

const insertNewMovie = (newMovie) => {
  const params = {
    TableName: "movie_table",
    Item: {
      movie_id: uuid.v4(),
      name: newMovie.name,
      year: newMovie.year,
      rating: newMovie.rating,
    },
  };

  return docClient.put(params).promise();
};

module.exports = {
  getMovieById,
  getAllMovies,
  insertNewMovie
};
