const db = require('../../data/dbConfig');

const findAll = async () => {
  const projects = await db('projects');
  return projects.map(project => ({
    ...project,
    project_completed: Boolean(project.project_completed), 
  }));
};

const create = async (project) => {
  const [projectId] = await db('projects').insert(project); 
  return findById(projectId);
};

const findById = async (id) => {
  const project = await db('projects').where({ project_id: id }).first(); 
  return {
    ...project,
    project_completed: Boolean(project.project_completed), 
  };
};

module.exports = {
  findAll,
  create,
  findById,
};
