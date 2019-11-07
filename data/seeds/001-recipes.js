
exports.seed = function(knex) {
  
  return knex('recipe').insert([
        {id: 1, recipeName: 'Sandwitch'},
        {id: 2, recipeName: 'taryaki chicken and rice'},
        {id: 3, recipeName: 'Ramen'}
      ]);
};
