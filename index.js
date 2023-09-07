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
qs = require("querystring");
ccavReqHandler = require("./ccavRequestHandler.js");
ccavResHandler = require("./ccavResponseHandler.js");

app.use(express.static("public"));
app.set("views", __dirname + "/public");
app.engine("html", require("ejs").renderFile);

app.get("/", function (req, res) {
  res.render("dataFrom.html");
});

app.post("/ccavRequestHandler", function (request, response) {
  ccavReqHandler.postReq(request, response);
});

app.post("/ccavResponseHandler", function (request, response) {
  ccavResHandler.postRes(request, response);
});

//Api routes are available
app.use("/api", require("./routes/email"));
app.use("/api", require("./routes/sheet"));
app.use("/api", require("./routes/form"));

//connect to localhost
app.listen(port, () => {
  process.env.PORT;
});
