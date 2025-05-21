const express = require('express');
const router = express.Router();
const { getProjects, createProject } = require('../controllers/projectController');

// GET: Retrieve all projects
router.get('/', getProjects);

// POST: Create a new project
router.post('/', createProject);

module.exports = router;