const mongoose = require("mongoose");
const dotenv = require('dotenv').config({ path: '../.env' });

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
    
  } catch (error) {
    console.log(error)
  }
};

module.exports = connectDB;