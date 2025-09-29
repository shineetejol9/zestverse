const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend server is running 🚀");
});

// POST route for contact form
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Basic validation
  if (!email || !message) {
    return res.json({ success: false, msg: "Email and message are required." });
  }

  console.log("📩 New message received:", { firstName, lastName, email, phone, message });

  // Send success response
  res.json({ success: true, msg: "" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
