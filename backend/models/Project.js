const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    liveUrl: { type: String },
    repoUrl: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);