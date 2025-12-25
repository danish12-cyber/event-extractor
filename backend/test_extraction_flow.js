const axios = require("axios");

async function testFlow() {
  const url = "https://paulgraham.com/founders.html"; 
  const testUrl = "https://paulgraham.com/founders.html";

  console.log("Testing Extraction...");
  try {
    const res = await axios.post("http://localhost:5000/api/events/extract", {
      url: testUrl
    });
    console.log("Extraction Response Status:", res.status);
    console.log("Summary:", res.data.summary ? "Present" : "Missing");
    console.log("Events:", res.data.events);
    
    // Now check history
    console.log("\nChecking History...");
    const histRes = await axios.get("http://localhost:5000/api/events/history");
    const found = histRes.data.find(e => e.url === testUrl);
    
    if (found) {
      console.log("SUCCESS: Event found in history!");
      console.log("Saved Summary:", found.summary.substring(0, 50) + "...");
    } else {
      console.log("FAILURE: Event not found in history.");
    }

  } catch (error) {
    console.error("Test Failed:", error.message);
    if (error.response) console.error("Response Data:", error.response.data);
  }
}

testFlow();
