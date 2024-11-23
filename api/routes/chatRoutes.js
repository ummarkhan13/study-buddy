// routes/chatRoutes.js
const express = require("express");
const Chat = require("../models/Chat");

const router = express.Router();

// Get all messages
router.get("/", async (req, res) => {
  try {
    const messages = await Chat.find().sort({ timestamp: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Post a message
router.post("/", async (req, res) => {
  try {
    const { message, username } = req.body;
    const newMessage = new Chat({ message, username });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a message
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
