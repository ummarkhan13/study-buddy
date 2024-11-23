// routes/labRoutes.js
const express = require("express");
const Lab = require("../models/Lab");

const router = express.Router();

// Create a new lab
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const newLab = new Lab({ name });
    await newLab.save();
    res.status(201).json(newLab);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a program to a lab
router.post("/:name/programs", async (req, res) => {
  try {
    const { name } = req.params;
    const { number, codeLinks, notes } = req.body;
    const lab = await Lab.findOne({ name });
    if (!lab) return res.status(404).json({ error: "Lab not found" });

    lab.programs.push({ number, codeLinks, notes });
    await lab.save();
    res.status(201).json(lab);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;