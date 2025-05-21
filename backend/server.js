// Load environment variables from the .env file
require('dotenv').config();


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Import project routes
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

app.use(cors());

//Middleware
app.use(express.json());
console.log("  Middleware is working");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,{
  dbName: "dbFolio"
})
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((error) => console.error("❌ MongoDB connection error:", error));

// API Routes
app.use('/api/projects', projectRoutes);

const Contact = require("./models/Contact"); // Import Contact model

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message });
    
    console.log("🔄 Saving contact to MongoDB:", newContact);

    await newContact.save(); // Save to database

    console.log("✅ Contact saved successfully!");

    res.status(201).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    console.error("❌ Error saving contact:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Sample route for testing
app.get('/', (req, res) => {
  res.send('Server is up and running, and MongoDB is connected! 🚀');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error encountered:', err.message);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});


//Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀Server is running on port ${PORT}`);
});