const Event = require("../models/Event");
const axios = require("axios");

exports.extractEvents = async (req, res) => {
  try {
    const { url } = req.body;

    const response = await axios.post("http://127.0.0.1:8000/extract", { url });
    
    if (response.data.error) {
      return res.status(400).json(response.data);
    }

    // Save to DB
    const { summary, events, publish_date } = response.data;
    
    console.log("Saving Event:", { url, summary: summary?.substring(0,20), publish_date });

    const newEvent = new Event({
      url,
      summary,
      publishDate: publish_date || "Unknown", // Fallback if missing
      events: events || []
    });
    await newEvent.save();

    res.json(response.data);
  } catch (err) {
    console.error("Controller Error:", err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAllEvents = async (req, res) => {
  try {
    await Event.deleteMany({});
    res.json({ message: "All events deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
