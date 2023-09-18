const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

// Parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define your CCAvenue credentials
const merchantId = "878809";
const accessCode = "AVXS76JC64CK33SXKC";
const workingKey = "9223AAA9021800C10C706B47E6B0D7C3";
const redirectUrl = "http://localhost:5000/ccavenue/response"; // Replace with your actual website URL

// Define a route to initiate the payment request
router.post("/ccavenue", (req, res) => {
  // Generate a unique order ID
  const orderId = "ORDER" + Date.now();

  // Extract order details from the request
  const amount = req.body.amount; // The payment amount
  const currency = "INR"; // Change as needed

  // Create a checksum hash
  const checksum = calculateChecksum(
    merchantId,
    orderId,
    amount,
    redirectUrl,
    workingKey
  );

  // Redirect to the CCAvenue payment page
  const redirectParams = {
    merchant_id: merchantId,
    order_id: orderId,
    amount,
    currency,
    redirect_url: redirectUrl,
    billing_name: req.body.billing_name,
    billing_address: req.body.billing_address,
    billing_city: req.body.billing_city,
    billing_state: req.body.billing_state,
    billing_zip: req.body.billing_zip,
    billing_country: req.body.billing_country,
    billing_tel: req.body.billing_tel,
    billing_email: req.body.billing_email,
    merchant_param1: "", // Add any additional parameters as needed
    checksum,
  };

  const ccAvenueUrl = "https://secure.ccavenue.com/transaction/transaction.do";
  const redirectQueryString = Object.entries(redirectParams)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  res.redirect(`${ccAvenueUrl}?${redirectQueryString}`);
});

// Define a route to handle the response from CCAvenue
router.post("/response", (req, res) => {
  // Verify the checksum
  const isValidChecksum = verifyChecksum(req.body, workingKey);

  if (isValidChecksum) {
    // Payment is successful
    // You can update your database or perform other actions here

    res.send("Payment Successful");
  } else {
    // Payment failed
    res.send("Payment Failed");
  }
});

// Function to calculate the checksum
function calculateChecksum(...params) {
  const data = params.join("|");
  const crypto = require("crypto");
  const hmac = crypto.createHmac("sha256", workingKey);
  hmac.update(data);
  return hmac.digest("hex");
}

// Function to verify the checksum
function verifyChecksum(body, workingKey) {
  const receivedChecksum = body.encResp;
  delete body.encResp;
  const calculatedChecksum = calculateChecksum(
    ...Object.values(body),
    workingKey
  );
  return receivedChecksum === calculatedChecksum;
}

module.exports = router;
