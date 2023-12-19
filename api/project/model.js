const db = require('../../data/dbConfig');

const findAll = async () => {
  const projects = await db('projects');
  return projects.map(project => ({
    ...project,
    project_completed: Boolean(project.project_completed), // Ensure it's converted to a boolean
  }));
};

const create = async (project) => {
  const [projectId] = await db('projects').insert(project); // No need for returning id
  return findById(projectId);
};

const findById = async (id) => {
  const project = await db('projects').where({ project_id: id }).first(); // Use project_id
  return {
    ...project,
    project_completed: Boolean(project.project_completed), // Ensure it's converted to a boolean
  };
};

module.exports = {
  findAll,
  create,
  findById,
};
