exports.up = function(knex) {
    return knex.schema.createTable('project_resources', table => {
        table.increments('assignment_id'); // Primary key
        table.integer('project_id').notNullable().references('project_id').inTable('projects'); // Foreign key
        table.integer('resource_id').notNullable().references('resource_id').inTable('resources'); // Foreign key
        // You can add additional fields if needed
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources');
};
