const eventController = require("../controllers/eventController");
const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const axios = require("axios");

// Save extracted data
// Save extracted data
router.post("/save", eventController.saveEvent);
router.post("/extract", eventController.extractEvents);


// Fetch all saved history
router.get("/history", async (req, res) => {
  try {
    const data = await Event.find().sort({ createdAt: -1 });
    res.json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
