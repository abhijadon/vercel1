const express = require("express");
const con = require("../middleware/mysql");
const router = express.Router();

router.post("/form", function (req, res) {
  const certificate = req.body.certificate;
  const university = req.body.university;
  const name = req.body.name;
  const mothername = req.body.mothername;
  const fathername = req.body.fathername;
  const mobile = req.body.mobile;
  const email = req.body.email;
  const alternate = req.body.alternate;
  const dob = req.body.dob;
  const course = req.body.course;
  const subcourse = req.body.subcourse;
  const enrollment = req.body.enrollment;
  const passingyear = req.body.passingyear;
  const house = req.body.house;
  const city = req.body.city;
  const zipcode = req.body.zipcode;
  const postoffice = req.body.postoffice;
  const country = req.body.country;
  const sql =
    "INSERT INTO user(certificate, university, name, mothername, fathername, email, mobile, alternate, dob, course, subcourse, enrollment, passingyear, house, city, zipcode, postoffice, country ) VALUES ('" +
    certificate +
    "', '" +
    university +
    "', '" +
    name +
    "', '" +
    mothername +
    "', '" +
    fathername +
    "', '" +
    mobile +
    "', '" +
    email +
    "', '" +
    alternate +
    "', '" +
    dob +
    "', '" +
    course +
    "', '" +
    subcourse +
    "', '" +
    enrollment +
    "', '" +
    passingyear +
    "', '" +
    house +
    "', '" +
    city +
    "', '" +
    zipcode +
    "', '" +
    postoffice +
    "', '" +
    country +
    "') ";

  con.query(sql, function (error, result) {
    if (error) throw error;
    res.send("Form data added successfully" + result.insertID);
  });
});

module.exports = router;
