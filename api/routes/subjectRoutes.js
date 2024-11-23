// routes/subjectRoutes.js
const express = require("express");
const Subject = require("../models/Subject");

const router = express.Router();

// Create a new subject
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const newSubject = new Subject({ name });
    await newSubject.save();
    res.status(201).json(newSubject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all subjects
router.get("/", async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a program to a subject
router.post("/:name/programs", async (req, res) => {
  try {
    const { name } = req.params;
    const { title, notes } = req.body;
    const subject = await Subject.findOne({ name });
    if (!subject) return res.status(404).json({ error: "Subject not found" });

    subject.programs.push({ title, notes });
    await subject.save();
    res.status(201).json(subject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;