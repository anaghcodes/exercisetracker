const { mongoose } = require("../db");

const logSchema = new mongoose.Schema({
  username: String,
  count: Number,
  log: [Object],
});

const Log = mongoose.model("Log", logSchema, "Logs");

module.exports = Log;
