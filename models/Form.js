// const { check } = require("express-validator");

// exports.formValidation = [
//   check("certificate", "Certificate is requied").not().isEmpty(),
//   check("university", "University is requied").not().isEmpty(),
//   check("name", "Name is requied").not().isEmpty(),
//   check("mothername", "Mothername is requied").not().isEmpty(),
//   check("fathername", "Fathername is requied").not().isEmpty(),
//   check("mobile", "Mobile Number is requied").isLength({ min: 10, max: 15 }),
//   check("email", "Please include a valid email")
//     .isEmail()
//     .normalizeEmail({ gmail_remove_dots: true }),
//   check("alternate", "Altername Number must be 10 or more characters").isLength(
//     {
//       min: 10,
//       max: 15,
//     }
//   ),
//   check("dob", "Date of birth is requied").not().isEmpty().isInt(),
//   check("course", "Fathername is requied").not().isEmpty(),
// ];
