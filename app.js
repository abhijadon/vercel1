const express = require("express");
const ccavenue = require("ccavenue"); // Assuming you have a ccavenue package installed
const router = express.Router();

// Set up CCAvenue parameters
ccavenue.setMerchant("878809");
ccavenue.setWorkingKey("9223AAA9021800C10C706B47E6B0D7C3");
ccavenue.setOrderId("123456");
ccavenue.setRedirectUrl("YourRedirectUrl");
ccavenue.setOrderAmount("YourOrderAmount");

// Optionally, you can set customer information
const customerInfo = {
  billing_cust_address: "Bangalore",
  billing_cust_name: "Nitish Kumar",
};
ccavenue.setOtherParams(customerInfo);

// Define a route for handling the redirect URL from CCAvenue
router.post("/url", (req, res) => {
  // Get the response data from CCAvenue
  const responseData = ccavenue.paymentRedirect(req);

  // Check if the response is valid
  if (responseData.isCheckSumValid === true) {
    if (responseData.AuthDesc === "Y") {
      // Payment was successful, handle your success logic here
      res.send("Payment Successful");
    } else if (responseData.AuthDesc === "N") {
      // Payment was unsuccessful, handle your failure logic here
      res.send("Payment Unsuccessful");
    } else if (responseData.AuthDesc === "B") {
      // Batch processing mode, handle your logic here
      res.send("Batch Processing");
    } else {
      // Handle other cases as needed
      res.send("Illegal Access");
    }
  } else {
    // Handle cases where the checksum is not valid
    res.send("Checksum Validation Failed");
  }
});

module.exports = router;
