const express = require("express");
const con = require("../middleware/mysql");
const router = express.Router();

router.post("/form", function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const mobile = req.body.mobile;

  const sql =
    "INSERT INTO userform(name, email, mobile) VALUES('" +
    name +
    "', '" +
    email +
    "', '" +
    mobile +
    "')";

  con.query(sql, function (error, result) {
    if (error) throw error;
    res.send("Form data added successfully" + result.insertID);
  });
});

module.exports = router;
