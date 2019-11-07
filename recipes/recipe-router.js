const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'the recipes could not be retrieved from the database'})
        })
});

router.get('/:id/shoppingList', (req, res) => {
    const id = req.params.id
    Recipes.getShoppingList(id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'the shopping list could not be retrieved'})
        })
})

router.get('/:id/instructions', (req, res) => {
    const id = req.params.id;
    Recipes.getInstructions(id)
        .then(steps => {
            res.status(200).json(steps)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: 'the instructions for the recipe could not be retrieved'})
        })
});

module.exports = router;
