const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //   step1
    await mongoose.connect(process.env.DB_URI);
    // step2
    console.log("databse is connected");
  } catch (error) {
    console.log("databse is not connected", error);
  }
};

module.exports = connectDB;
