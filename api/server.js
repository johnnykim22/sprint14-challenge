// build your server here and require it from index.js
const express = require("express");
const cors = require("cors");

// Import routers
const projectRouter = require("./project/router"); // If server.js is in the api folder
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

const server = express();

// Middleware setup
server.use(express.json());
server.use(cors());

// Route setup
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

// Catch-all error handling middleware
server.use((err, req, res, next) => {
  console.error(err.stack); // Log error stack for debugging
  res.status(500).send("Something broke!");
});

module.exports = server;