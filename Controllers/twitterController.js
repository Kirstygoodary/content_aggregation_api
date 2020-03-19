const socialMedia = {};

const fetchTweets = (error, tweets, response) => {
  if (!error) {
    //console.log(tweets[0].user.profile_image_url);

    const tweetArray = [];
    tweets.forEach(tweet => {
      const tweetObject = {};
      tweetObject.name = tweet.user.name;
      tweetObject.screenName = tweet.user.screen_name;
      tweetObject.profilePicture = tweet.user.profile_image_url;
      tweetObject.tweetText = tweet.text;
      tweetObject.retweetUser = tweet.entities.user_mentions;
      tweet.hashtags = tweet.entities.hashtags;
      tweetObject.imageUrls = tweet.entities.urls;
      tweetObject.retweets = tweet.retweet_count;
      tweetObject.favouriteCount = tweet.favorite_count;

      tweetArray.push(tweetObject);
    });
  } else if (error) {
    return response.status(error.status).send({ message: error.message });
  }
};

module.exports = { fetchTweets };
