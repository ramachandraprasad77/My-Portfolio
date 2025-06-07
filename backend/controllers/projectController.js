const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.createProject = async (req, res) => {
  try {
    const { title, description, liveUrl, repoUrl } = req.body;
    const newProject = new Project({ title, description, liveUrl, repoUrl });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};