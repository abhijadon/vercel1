const mongoose = require("mongoose");
const { Schema } = mongoose;

const FormSchema = new Schema({
  certificate: {
    type: String,
    required: true,
    unique: true,
  },

  university: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  mobile: {
    type: Number,
    required: true,
    unique: true,
  },

  dob: {
    type: Number,
  },

  father_name: {
    type: String,
  },
  motehr_name: {
    type: String,
  },

  alternate_no: {
    type: Number,
  },

  course: {
    type: String,
  },
  sub_course: {
    type: String,
  },

  passing_year: {
    type: Number,
    required: true,
  },

  enroll_number: {
    type: Number,
    required: true,
    unique: true,
  },
  house_no: {
    type: Number,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },

  zipcode: {
    type: String,
  },
  post_office: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("abhishek", FormSchema);
