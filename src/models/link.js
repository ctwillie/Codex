const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  techId: String,
});

module.exports = mongoose.model("Link", linkSchema);
