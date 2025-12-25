const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const Event = require("../models/Event"); // Keep for history route

// Extract event (Calls Controller)
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
