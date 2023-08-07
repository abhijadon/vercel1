const express = require("express");
const router = express.Router();
const Form = require("../models/Form");
const { body, validationResult } = require("express-validator");

//  ROUTE 1: Get All the Notes using: GET "/api/form/getFromData".
router.get("/fetchFormData", async (req, res) => {
  try {
    const form = await Form.find({ user: req.user.id });
    res.json(form);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Get All the Notes using: GET "/api/form/formdata". Login required
router.post(
  "/formData",
  [
    body("certificage", "Enter a valid certificate").apply(),
    body("university", "Enter a submit university").apply(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email-id")
      .isLength({ min: 5 })
      .isEmail()
      .normalizeEmail(),
    body("mobile", "Enter your correct number")
      .isLength({ min: 10 })
      .isMobilePhone(),
    body("dob", "Enter your date of birth").isNumeric(),
    body("father_name", "Enter your Father name")
      .isString()
      .isLength({ min: 3 }),
    body("mother_name", "Enter your Moterh name")
      .isString()
      .isLength({ min: 3 }),
    body("alternate_no", "Enter your alternate number")
      .isNumeric()
      .isLength({ min: 10 }),
    body("course", "Enter your course"),
    body("sub_course", "Enter your sub-course"),
    body("passing_year", "Enter your passing year").isNumeric(),
    body("eroll_number", "Enter your correct Erollment number")
      .isNumeric()
      .isLength({ min: 8 }),
    body("house_no", "Enter your hourse number"),
    body("state", "Enter your state"),
    body("city", "Enter your city"),
    body("zipcode", "Enter your zipcode").isNumeric(),
    body("post_office", "Enter your post-office"),
    body("country", "Enter your country"),
  ],
  async (req, res) => {
    try {
      const {
        certificate,
        university,
        name,
        email,
        mobile,
        dob,
        father_name,
        motehr_name,
        alternate_no,
        course,
        sub_course,
        passing_year,
        enroll_number,
        house_no,
        state,
        city,
        zipcode,
        post_office,
        country,
      } = req.body;

      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const form = new Form({
        city,
        zipcode,
        post_office,
        country,
        state,
        house_no,
        enroll_number,
        passing_year,
        sub_course,
        course,
        alternate_no,
        motehr_name,
        father_name,
        dob,
        mobile,
        email,
        name,
        university,
        certificate,
      });
      const savedForm = await form.save();

      res.json(savedForm);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Get All the Notes using: GET "/api/googlesheet".



module.exports = router;
