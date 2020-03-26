const { selectTweets } = require("../models/tweetsModel");

const fetchTweets = (req, res, next) => {
  selectTweets()
    .then(response => {
      res.status(200).send({ response });
    })
    .catch(err => {
      next(err);
    });
};

module.exports = { fetchTweets };
