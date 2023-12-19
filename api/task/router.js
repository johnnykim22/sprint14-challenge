// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model'); 
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tasks = await Tasks.findAll();
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error getting tasks', error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating task', error: err.message });
  }
});

module.exports = router;