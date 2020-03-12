const fetchTweets = (error, tweets, response) => {
  if (!error) {
    console.log(tweets);
  }
};

module.exports = { fetchTweets };
