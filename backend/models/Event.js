const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  url: { type: String, required: true },
  summary: { type: String, required: true },
  publishDate: { type: String, required: true },
  events: { type: Array, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Event", EventSchema);
