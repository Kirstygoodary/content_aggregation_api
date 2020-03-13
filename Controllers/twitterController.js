const socialMedia = {};

const fetchTweets = (error, tweets, response) => {
  if (!error) {
    socialMedia.tweets = tweets.map(tweet => tweet.text);

    console.log(socialMedia, "social media");
  } else if (error) {
    return response.status(error.status).send({ message: error.message });
  }
};

module.exports = { fetchTweets };
