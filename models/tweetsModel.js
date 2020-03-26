const selectTweets = () => {
  const tweetArray = [];
  tweets
    .forEach(tweet => {
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
    })
    .then(res => {
      if (res.length === 0) {
        return Promise.reject({ status: 404, msg: "Not Found" });
      } else return res;
    });
};

module.export = { selectTweets };
