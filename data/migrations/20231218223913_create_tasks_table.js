exports.up = function(knex) {
    return knex.schema.createTable('tasks', table => {
        table.increments('task_id'); // Primary key
        table.text('task_description').notNullable(); // Required
        table.text('task_notes'); // Optional
        table.boolean('task_completed').defaultTo(false); // Defaults to false
        table.integer('project_id').notNullable().references('project_id').inTable('projects'); // Foreign key
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks');
};
