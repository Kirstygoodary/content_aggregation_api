const apiRouter = require("express").Router();

apiRouter.get("/", () => res.sendStatus(200));

module.exports = apiRouter;
