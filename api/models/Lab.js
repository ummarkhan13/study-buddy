// models/Lab.js
const mongoose = require("mongoose");

const labSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  programs: [
    {
      number: { type: Number, required: true },
      codeLinks: [String],
      notes: String,
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model("Lab", labSchema);
