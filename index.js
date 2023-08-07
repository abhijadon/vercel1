const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const port = 5000;
app.use(bodyParser.json());

//Api routes are available
app.use("/api", require("./routes/sheet"));

//connect to localhost

app.listen(port, () => {
  console.warn(`Connected to app at http://localhost:${port} successfully`);
});
