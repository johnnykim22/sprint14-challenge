// build your `Resource` model here
const db = require('../../data/dbConfig'); 

const findAll = async () => {
  const resources = await db('resources');
  return resources.map(resource => ({
     ...resource
  }));
}

const create = async (resource) => {
  let resourceId;
  if (process.env.DB_ENV === 'production') {
    // For PostgreSQL
    [resourceId] = await db('resources').insert(resource).returning('resource_id');
  } else {
    // For SQLite
    [resourceId] = await db('resources').insert(resource);
  }

  // Fetch and return the newly created resource
  const newResource = await findById(resourceId);
  return newResource;
};

const findById = async (id) => {
  const resource = await db('resources').where({ resource_id: id }).first();
  return {
    ...resource
  };
}

module.exports = {
  findAll,
  create,
  findById
};

