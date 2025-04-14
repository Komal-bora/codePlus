const mongoose = require("mongoose");
uri = "mongodb+srv://komalbora845:3BQumEfRRQrduPIK@cluster0.5nbi4yn.mongodb.net/";

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