const express = require("express");
const router = express.Router("");

router.post("/payment/success", (req, res) => {
  //Payumoney will send Success Transaction data to req body.

  res.send(req.body);
});

module.exports = router;
