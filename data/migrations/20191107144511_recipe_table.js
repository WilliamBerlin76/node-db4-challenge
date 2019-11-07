
exports.up = function(knex) {
  return knex.schema
    .createTable('recipe', tbl => {
        tbl.increments();
        tbl.string('recipeName', 255).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema  
    .dropTableIfExists('recipe')
};
