const db = require('../../data/dbConfig');

const findAll = async () => {
  const tasks = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed',
      'p.project_name',
      'p.project_description'
    );

  return tasks.map(task => ({
    ...task,
    task_completed: Boolean(task.task_completed), 
  }));
};

const create = async (task) => {
  const [taskId] = await db('tasks').insert(task); 
  return findById(taskId);
};

const findById = async (id) => {
  const task = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .where({ 't.task_id': id })
    .select(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed',
      'p.project_name',
      'p.project_description'
    )
    .first();

  return {
    ...task,
    task_completed: Boolean(task.task_completed), 
  };
};

module.exports = {
  findAll,
  create,
  findById,
};
