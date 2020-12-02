const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    let result = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database is connected");
  } catch (error) {
    console.log(`the database is not connected ${error}`);
  }
};
module.exports = dbConnection;
