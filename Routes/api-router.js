const apiRouter = require("./node_modules/express").Router();

apiRouter.get("/", () => res.sendStatus(200));

module.exports = apiRouter;
