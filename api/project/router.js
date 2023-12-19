// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.findAll();
    res.json(projects);
  } catch (err) {
    console.error(err); 
    res.status(500).json({ message: 'Error getting projects', error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    // Validate the request body
    if (!req.body.project_name) {
      return res.status(400).json({ message: 'Error: project_name is required' });
    }

    const project = await Projects.create(req.body);
    res.status(201).json(project); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating project', error: err.message });
  }
});

module.exports = router;
