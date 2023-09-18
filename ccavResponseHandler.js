const express = require("express");
const crypto = require("crypto");
const router = express.Router();

const merchantId = "2824277";
const accessCode = "AVZD09KI07AB82DZBA";
const workingKey = "3D0A7D33E732A30B805B34B7DA51E94C";
const returnUrl = "http://localhost:5000/ccavenue/response"; // Replace with your actual return URL

// Route for handling payment request
router.post("/ccavenue", (req, res) => {
  const orderId = "ORDER_ID"; // Replace with your unique order ID
  const amount = "100.00"; // Replace with the amount to charge

  const data = `${merchantId}|${orderId}|${amount}|${returnUrl}|${accessCode}`;
  const encryptedData = crypto.createHash("sha256").update(data).digest("hex");

  const redirectUrl = `https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${merchantId}&order_id=${orderId}&amount=${amount}&redirect_url=${returnUrl}&encRequest=${encryptedData}&access_code=${accessCode}`;

  res.redirect(redirectUrl);
});

// Route for handling the response from CCAvenue
router.post("/ccavenue/response", (req, res) => {
  const encResp = req.body.encResp;
  const decrypt = crypto.createDecipher("aes-128-cbc", workingKey);
  let text = decrypt.update(encResp, "hex", "utf8");
  text += decrypt.final("utf8");

  // Parse the response data here
  // You can extract the payment status and other relevant information from 'text'

  console.log("CCAvenue Response:", text);

  // Handle the response and update your database or perform other actions as needed

  res.send("Payment response received");
});

module.exports = router;
