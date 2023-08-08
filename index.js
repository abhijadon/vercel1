const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));

//Api routes are available
app.use("/api", require("./routes/sheet"));
app.use("/api", require("./routes/form"));

//connect to localhost

app.listen(port, () => {
  console.warn(`Connected to app at http://localhost:${port} successfully`);
});
