const Event = require("../models/Event");
const axios = require("axios");

exports.extractEvents = async (req, res) => {
  try {
    const { url } = req.body;

    const response = await axios.post("http://127.0.0.1:8000/extract", { url });
    const data = response.data;
    console.log("ML Response:", data);

    if (data.error) {
      return res.status(400).json({ error: data.error });
    }

    // Save to history automatically
    const newEvent = new Event({
      url: url,
      summary: data.summary,
      publishDate: data.publish_date,
      events: data.events
    });
    await newEvent.save();

    res.json(data);
  } catch (err) {
    console.error("Error in extractEvents:", err);
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

exports.saveEvent = async (req, res) => {
  try {
    const { url, summary, publishDate, events } = req.body;

    const obj = new Event({
      url,
      summary,
      publishDate,
      events
    });

    await obj.save();
    res.json({ message: "Saved successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
