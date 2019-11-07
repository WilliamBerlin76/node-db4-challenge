
exports.up = function(knex) {
  return knex.schema
    .createTable('recipe_ingredient_quantity', tbl => {
        tbl.increments();

        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipe')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl
            .integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');

        tbl.float('quantity').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema    
    .dropTableIfExists('recipe_ingredient-quantity')
};
