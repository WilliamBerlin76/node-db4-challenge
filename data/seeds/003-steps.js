
exports.seed = function(knex) {
  
  return knex('steps').insert([
        {id: 1, stepNumber: 1, instructions: 'get bread', recipe_id: 1},
        {id: 2, stepNumber: 2, instructions: 'place stuff on bread', recipe_id: 1},
        {id: 3, stepNumber: 3, instructions: 'put other slice of bread on top of the good stuff', recipe_id: 1},
        {id: 4, stepNumber: 1, instructions: 'cook chicken', recipe_id: 2},
        {id: 5, stepNumber: 2, instructions: 'cook rice', recipe_id: 2},
        {id: 6, stepNumber: 3, instructions: 'add sauce to chicken while cooking', recipe_id: 2},
        {id: 7, stepNumber: 1, instructions: 'go to store', recipe_id: 3},
        {id: 8, stepNumber: 2, instructions: 'buy ramen', recipe_id: 3},
        {id: 9, stepNumber: 3, instructions: 'cook and eat', recipe_id: 3},
      ]);
};
