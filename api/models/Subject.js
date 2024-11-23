// models/Subject.js
const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  programs: [
    {
      title: { type: String, required: true },
      notes: String,
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model("Subject", subjectSchema);
