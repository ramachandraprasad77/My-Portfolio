const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("✅ Received contact submission:", req.body);

    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message });
    
    console.log("🔄 Preparing to save:", newContact);

    await newContact.save();

    console.log("✅ Successfully saved to MongoDB!");

    res.status(201).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    console.error("❌ Error saving contact details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;