const mongoose = require("mongoose");

const techSchema = new mongoose.Schema({
  title: String,
  description: String,
  categoryId: String,
});

module.exports = mongoose.model("Tech", techSchema, "techs");
