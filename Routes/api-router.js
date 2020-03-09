const apiRouter = require("express").Router();

apiRouter.route("/").get(sendApiEndpoints);

module.exports = apiRouter;
