const express = require("express");
const con = require("./middleware/mysql");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));
dotenv.config();
const http = require("http");

// APP PRODUCTION
if (process.env.PORT == "production") {
  const path = require("path");

  app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

//Api routes are available
app.use("/api/", require("./routes/email"));
app.use("/", require("./routes/sheet"));
app.use("/", require("./routes/form"));

//connect to localhost
app.listen(port, () => {
  console.warn(`Connected to app at http://localhost:${port} successfully`);
});
