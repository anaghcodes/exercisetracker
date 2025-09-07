const { mongoose } = require("../db");

const exerciseSchema = new mongoose.Schema({
  user_id: String,
  username: String,
  description: String,
  duration: Number,
  date: Date,
});

const Exercise = mongoose.model("Exercise", exerciseSchema, "exercises");

module.exports = Exercise;
