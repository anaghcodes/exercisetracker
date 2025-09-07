const mongoose = require("mongoose");

async function initDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "free" });
  } catch (err) {
    if (err) console.log(err);
    return;
  }
  console.log("MongoDB initialized!");
}

module.exports = { mongoose: mongoose, initDB: initDB };
