const dotenv = require("dotenv");
// const express = require("express");
const apiRouter = require("./routes/api-router");
const result = dotenv.config();
const app = express();
const { client, params } = require("./credentials/client");

const { fetchTweets } = require("./controllers/twitterController");

app.use(express.json());

app.all("/*", (req, res, next) => {
  return res.status(404).send({ msg: "Route not found" });
});

if (result.error) {
  console.log(result.error);
}
console.log(result.parsed);

client.get("statuses/user_timeline", params, fetchTweets);

app.use("/api", apiRouter);

app.listen(process.env.PORT || 8000, () => {
  console.log(`listening on port 8000`);
});

module.exports = app;
