const express = require("express");
const con = require("./middleware/mysql");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));
dotenv.config();
//Api routes are available
app.use("/api/", require("./routes/email"));
app.use("/", require("./routes/sheet"));
app.use("/", require("./routes/form"));

//connect to localhost
app.listen(port, () => {
  console.warn(`Connected to app at http://localhost:${port} successfully`);
});
