const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/codeIDE";

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