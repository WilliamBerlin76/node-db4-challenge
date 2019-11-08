
exports.up = function(knex) {
    return knex.schema
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredientName', 225).notNullable();
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
    .dropTableIfExists('ingredients')
};
