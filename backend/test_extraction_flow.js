const axios = require('axios');

const PYTHON_API_URL = "http://127.0.0.1:8000/extract";
const NODE_API_URL = "http://127.0.0.1:5000/api/events";

// A sample news article URL (ensure this is valid or use a mock logic if possible, 
// for now we'll try a real one or handle errors gracefully)
const TARGET_URL = "https://www.bbc.com/news/world-us-canada-68612345"; 
// Note: Real URLs might change content or disappear. 
// Ideally we mock, but for this "flow" test we might just want to see connectivity.

async function runTest() {
  try {
    console.log("1. Calling Python Service to extract data...");
    // We send a mocked URL or real one
    // Using a known simple page or just checking if the service responds might be safer
    // But let's try to mimic a real request
    const payload = { url: "https://www.w3.org/History/19921103-hypertext/hypertext/WWW/TheProject.html" }; // simple stable page
    
    // The python code: @app.post("/extract") accepts { url: "" }
    const extractRes = await axios.post(PYTHON_API_URL, payload);
    console.log("   Python Response:", extractRes.data);

    if (extractRes.data.error) {
      throw new Error("Python extraction failed: " + extractRes.data.error);
    }

    const extractedData = {
        url: payload.url,
        summary: extractRes.data.summary,
        publishDate: extractRes.data.publish_date,
        events: extractRes.data.events
    };

    console.log("2. Saving data to Node Backend...");
    const saveRes = await axios.post(`${NODE_API_URL}/save`, extractedData);
    console.log("   Save Response:", saveRes.data);

    console.log("3. Verifying Saved History...");
    const historyRes = await axios.get(`${NODE_API_URL}/history`);
    
    // Check if our inserted url is in the history
    const found = historyRes.data.find(item => item.url === payload.url);
    
    if (found) {
        console.log("   SUCCESS: Found saved event in history!");
        console.log("   ID:", found._id);
    } else {
        console.error("   FAILURE: Could not find the saved event in history.");
    }

  } catch (error) {
    console.error("TEST FAILED:", error.message);
    if (error.response) {
        console.error("Response Status:", error.response.status);
        console.error("Response Data:", error.response.data);
    }
  }
}

runTest();
