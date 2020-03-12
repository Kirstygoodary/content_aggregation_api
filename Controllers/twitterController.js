const socialMedia = {};

const fetchTweets = (error, tweets, response) => {
  if (!error) {
    socialMedia.tweets = tweets.filter(tweet => tweet.text);
    console.log(socialMedia);
  } else if (error) {
    return response.status(error.status).send({ message: error.message });
  }
};

module.exports = { fetchTweets };
