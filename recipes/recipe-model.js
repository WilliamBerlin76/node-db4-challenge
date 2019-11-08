const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipeByIngredient
}

function getRecipes(){
   return db('recipe');
}

function getShoppingList(recipe_id){
    return db.select('recipe.recipeName', 'ingredients.ingredientName', 'recipe_ingredient_quantity.quantity')
            .where('recipe.id', '=', recipe_id)
            .from('recipe')
            .join('ingredients', 'ingredients.id', '=', 'recipe_ingredient_quantity.ingredient_id')
            .join('recipe_ingredient_quantity', 'recipe.id', '=', 'recipe_ingredient_quantity.recipe_id')
}

function getInstructions(recipe_id){
    return db.select('recipe.recipeName', 'steps.stepNumber', 'steps.instructions')
            .where('recipe.id', '=', recipe_id)
            .from('recipe')
            .join('steps', 'steps.recipe_id', '=', 'recipe.id')
};

function getRecipeByIngredient(ingredient_id){
    return db.select('recipe.recipeName', 'ingredients.ingredientName')
                .where('ingredients.id', '=', ingredient_id)
                .from('recipe')
                .join('ingredients', 'recipe.id', '=', 'ingredients.recipe_id')
}