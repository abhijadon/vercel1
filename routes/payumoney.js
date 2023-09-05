const express = require("express");
const router = express.Router();
const request = require("request");

router.post("/payumoney", (req, res) => {
  req.body.txnid = Math.floor(Math.random() * Date.now());

  req.body.email = req.user.email;

  req.body.firstname = req.user.firstname;

  //Here save all the details in pay object
  const pay = req.body;

  const hashString =
    "YOUR_MERCHANT_KEY" + //store in in different file
    "|" +
    pay.txnid +
    "|" +
    pay.amount +
    "|" +
    pay.productinfo +
    "|" +
    pay.firstname +
    "|" +
    pay.email +
    "|" +
    "||||||||||" +
    "YOUR_MERCHANT_SALT"; //store in in different file

  const sha = new jsSHA("SHA-512", "TEXT");

  sha.update(hashString);

  //Getting hashed value from sha module
  const hash = sha.getHash("HEX");

  pay.key = "YOUR_MERCHANT_KEY"; //store in in different file;
  pay.surl = "http://localhost:5000/payment/success";
  pay.furl = "http://localhost:5000/payment/fail";
  pay.hash = hash;

  //Making an HTTP/HTTPS call with request
  request.post(
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      url: "https://sandboxsecure.payu.in/_payment", //Testing url
      form: pay,
    },
    function (error, httpRes, body) {
      if (error)
        res.send({
          status: false,
          message: error.toString(),
        });

      if (httpRes.statusCode === 200) {
        res.send(body);
      } else if (httpRes.statusCode >= 300 && httpRes.statusCode <= 400) {
        res.redirect(httpRes.headers.location.toString());
      }
    }
  );
});

module.exports = router;
