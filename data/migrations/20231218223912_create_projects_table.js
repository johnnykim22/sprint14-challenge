exports.up = function(knex) {
    return knex.schema.createTable('projects', table => {
        table.increments('project_id'); // Primary key
        table.string('project_name').notNullable(); // Required
        table.text('project_description'); // Optional
        table.boolean('project_completed').defaultTo(false); // Defaults to false
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects');
};
