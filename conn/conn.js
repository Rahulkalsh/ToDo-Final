const mongoose = require("mongoose");
require('dotenv').config()
const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        process.env.MONGODB_URL
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
