
exports.seed = function(knex) {
  
  return knex('ingredients').insert([
        {id: 1, ingredientName: 'bread', recipe_id: 1},
        {id: 2, ingredientName: 'meat', recipe_id: 1},
        {id: 3, ingredientName: 'cheese', recipe_id: 1},
        {id: 4, ingredientName: 'tarayaki sauce', recipe_id: 2},
        {id: 5, ingredientName: 'chicken', recipe_id: 2},
        {id: 6, ingredientName: 'rice', recipe_id: 2},
        {id: 7, ingredientName: 'noodles', recipe_id: 3},
        {id: 8, ingredientName: 'miso broth', recipe_id: 3},
        {id: 9, ingredientName: 'much more yummy stuff', recipe_id: 3},
      ]);
};
