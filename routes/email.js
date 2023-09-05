const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/email", (req, res) => {
  const {
    certificate,
    university,
    name,
    mothername,
    fathername,
    mobile,
    email,
    alternate,
    dob,
    course,
    subcourse,
    enrollment,
    passingyear,
    house,
    state,
    city,
    zipcode,
    postoffice,
    country,
  } = req.body;

  // create a  object
  const transpoter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const mailOptios = {
    from: process.env.SMTP_MAIL,
    to: ["abhisheksode001@gmail.com"],
    subject: "Seding email by the SODE ",
    html: `<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>SODE - Student service</title>
  <style>
*{
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

 td, tr{
  border: 1px solid #ddd;
  padding: 8px;
  width: 50%;
  
}

tr:hover {background-color: #ddd;}

tr {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  color: black;
}
</style>
</head>
<body style="font-family: 'Lato', sans-serif;">
  <div style="border: 1px solid black;" >
  <div style="text-align: center; background-color: blue; height: 30px; border-bottom: 1px solid black;">
     <h1 style="color: #ffffff; font-size: 150%; margin-top: 0;">
        Student services
      </h1>
    </div>
    
        <div>
          <table>
            <tbody>
            <tr>
            <td>
              Name:
            </td>
              <td>
              ${name}
            </td>
          </tr>
           <tr>
            <td>
              Email:
            </td>
              <td>
           ${email}
            </td>
          </tr>
          <tr>
            <td>
              Mobile Number:
            </td>
              <td>
           ${mobile}
            </td>
          </tr>
          <tr>
            <td>
              Mothername:
            </td>
              <td>
           ${mothername}
            </td>
          </tr>
          <tr>
            <td>
              Fathername:
            </td>
              <td>
           ${fathername}
            </td>
          </tr>
          <tr>
            <td>
              University:
            </td>
              <td>
           ${university}
            </td>
          </tr>
          <tr>
            <td>
              Certificate:
            </td>
              <td>
           ${certificate}
            </td>
          </tr>
          <tr>
            <td>
              Alternatenumber:
            </td>
              <td>
           ${alternate}
            </td>
          </tr>
          <tr>
            <td>
              Enrollment:
            </td>
              <td>
           ${enrollment}
            </td>
          </tr>
          <tr>
            <td>
              Course:
            </td>
              <td>
           ${course}
            </td>
          </tr>
          <tr>
            <td>
              Subcourse:
            </td>
              <td>
           ${subcourse}
            </td>
          </tr>
          <tr>
            <td>
              DOB:
            </td>
              <td>
           ${dob}
            </td>
          </tr>
          <tr>
            <td>
              Passingyear:
            </td>
              <td>
           ${passingyear}
            </td>
          </tr>
          <tr>
            <td>
              House:
            </td>
              <td>
           ${house}
            </td>
          </tr>
          <tr>
            <td>
              State:
            </td>
              <td>
           ${state}
            </td>
          </tr>
          <tr>
            <td>
              City:
            </td>
              <td>
           ${city}
            </td>
          </tr>
          <tr>
            <td>
              Zipcode:
            </td>
              <td>
           ${zipcode}
            </td>
          </tr>
          <tr>
            <td>
              Postoffice:
            </td>
              <td>
           ${postoffice}
            </td>
          </tr>
          <tr>
            <td>
             Country:
            </td>
              <td>
           ${country}
            </td>
          </tr>
            </tbody>
</table>
    </div>
  </div>
</body>
</html>`,
  };

  // use the transporter
  transpoter.sendMail(mailOptios, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending Email");
    } else {
      console.log("Email sent", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

module.exports = router;
