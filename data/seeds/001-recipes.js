
exports.seed = function(knex) {
  
  return knex('recipe').insert([
        {id: 1, recipeName: 'Sandwich'},
        {id: 2, recipeName: 'taryaki chicken and rice'},
        {id: 3, recipeName: 'Ramen'}
      ]);
};
