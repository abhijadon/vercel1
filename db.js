const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(MONGO_URI);
    console.log("Mongo connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;
