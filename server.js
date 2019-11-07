const express = require('express');

const RecipeRouter = require('./recipes/recipe-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Let's cook!!!</h2>`)
})

module.exports = server