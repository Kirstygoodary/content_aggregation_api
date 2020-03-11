const express = require("express");
const apiRouter = require("./routes/api-router");
const result = dotenv.config();
const app = express();
const Twitter = require("twitter");

app.use(express.json());

if (result.error) {
  console.log(result.error);
}
console.log(result.parsed);

const client = new Twitter({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET_KEY,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

const params = { screen_name: "pillarwallet" };

client.get("statuses/user_timeline", params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

module.exports = client;

app.use("/api", apiRouter);

app.listen(process.env.PORT || 8000, () => {
  console.log(`listening on port 8000`);
});

module.exports = app;
