const express = require("express");
const apiRouter = require("./routes/api-router");
const result = dotenv.config();
const app = express();
app.use(express.json());

if (result.error) {
  console.log(result.error);
}

console.log(result.parsed);

app.use("/api", apiRouter);

app.listen(process.env.PORT || 8000, () => {
  console.log(`listening on port 8000`);
});

module.exports = app;
