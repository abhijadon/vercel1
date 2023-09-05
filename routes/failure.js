const express = require("express");
const router = express.Router("");

router.post("/payment/fail", (req, res) => {
  //Payumoney will send Fail Transaction data to req body.
  res.send(req.body);
});

module.exports = router;
