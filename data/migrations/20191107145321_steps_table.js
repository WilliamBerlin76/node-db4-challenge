
exports.up = function(knex) {
  return knex.schema
    .createTable('steps', tbl => {
        tbl.increments();
       
        tbl.integer('stepNumber')
            .unsigned()
            .notNullable();
        tbl.text('instructions', 255).notNullable();

        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipe')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps');
};
