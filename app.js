const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const crypto = require("crypto");

const app = express();
const port = 3000; // Change this to your desired port

// CCAvenue merchant credentials
const merchantId = "878809";
const accessCode = "AVXS76JC64CK33SXKC";
const workingKey = "9223AAA9021800C10C706B47E6B0D7C3";

app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for the payment form
app.get("/payment", (req, res) => {
  res.sendFile(__dirname + "/dataFrom.html"); // Create a simple HTML form for payment
});

// Handle the form submission
app.post("/payment", (req, res) => {
  const orderId = Date.now(); // Generate a unique order ID
  const amount = req.body.amount;

  // Calculate checksum
  const data = `${merchantId}|${orderId}|${amount}|YourOptionalDescription|YourOptionalEmail|YourOptionalMobile|YourCustomerName|YourReturnURL|1|test@test.com||||||${workingKey}`;
  const encryptedData = crypto.createHash("sha512").update(data).digest("hex");

  // Redirect to CCAvenue's payment gateway
  const redirectUrl = `https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${merchantId}&order_id=${orderId}&amount=${amount}&currency=INR&redirect_url=YOUR_RETURN_URL&cancel_url=YOUR_CANCEL_URL&language=EN&billing_name=YourCustomerName&billing_address=YourAddress&billing_city=YourCity&billing_state=YourState&billing_zip=YourZip&billing_country=India&billing_tel=YourPhoneNumber&billing_email=YourEmail&merchant_param1=custom_param1&merchant_param2=custom_param2&checksum=${encryptedData}`;

  res.redirect(redirectUrl);
});

// Define a callback URL to handle the response from CCAvenue
app.post("/ccavenue_callback", (req, res) => {
  // Verify the response checksum here and process the payment status
  const receivedChecksum = req.body.checksum;
  const orderId = req.body.order_id;
  // You'll need to implement checksum verification and payment status processing here

  // Send a response back to CCAvenue to confirm receipt
  res.send("Success");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
