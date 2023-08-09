const mysql = require("mysql");

const con = mysql.createConnection({
  connectTimeout: 6000,
  host: "localhost",
  user: "root",
  password: "",
  database: "_newstd",
});

module.exports = con;
