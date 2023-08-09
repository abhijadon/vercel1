const express = require("express");
const con = require("./middleware/mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", function (req, res) {
  
});

//Api routes are available
app.use("/api", require("./routes/sheet"));
app.use("/", require("./routes/form"));

//connect to localhost
app.listen(port, () => {
  console.warn(`Connected to app at http://localhost:${port} successfully`);
});
