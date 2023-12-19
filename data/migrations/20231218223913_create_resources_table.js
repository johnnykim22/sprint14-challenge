exports.up = function(knex) {
    return knex.schema.createTable('resources', table => {
        table.increments('resource_id'); // Primary key
        table.string('resource_name').notNullable().unique(); // Required and unique
        table.text('resource_description'); // Optional
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources');
};
