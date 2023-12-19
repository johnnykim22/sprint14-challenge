// build your `/api/resources` router here
const express = require('express');

const Resources = require('./model'); 

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const resources = await Resources.findAll();  
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: 'Error getting resources' });
  }
});

router.post('/', async (req, res) => {
  try {
    const resource = await Resources.create(req.body);
    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json({ message: 'Error creating resource' });
  }
});

module.exports = router;