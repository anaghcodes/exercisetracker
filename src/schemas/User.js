const { mongoose } = require("../db");

const userSchema = new mongoose.Schema({
  username: String,
});

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
