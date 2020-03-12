const socialMedia = {};

const fetchTweets = (error, tweets, response) => {
  if (!error) {
    socialMedia.tweets = tweets;
  } else if (error) {
    return response.status(error.status).send({ message: error.message });
  }
};

module.exports = { fetchTweets };
