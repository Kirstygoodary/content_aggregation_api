const apiRouter = require("express").Router();

apiRouter.get("/", () => {
  res.sendStatus(200);
});

apiRouter.get(
  "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=pillarwallet&count=1"
);
module.exports = apiRouter;
