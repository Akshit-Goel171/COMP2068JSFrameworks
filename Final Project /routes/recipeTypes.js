const express = require('express');
const router = express.Router();
const RecipeType = require('../models/recipeType');

// GET handlers for projects

router.get('/', async (req, res, next) => {
    try {
        const recipeTypes = await RecipeType.find().exec();
        res.render('recipeTypes/index', { title: '', dataset: recipeTypes });
    } catch (error) {
        console.error('Error fetching recipe types:', error);
        next(error);
    }
});


// get handler to add recipe type 
router.get('/add', (req, res, next) => {
    res.render('recipeTypes/add', {title: 'Add a new recipe type'});
})


// POST handler for adding recipes
router.post('/add', async (req, res, next) => {
    try {
        const newRecipeType = await RecipeType.create({
            recipeType: req.body.recipeType, 
        });
        console.log('Recipe Type added:', newRecipeType);
        res.redirect('/recipeTypes');
    } catch (error) {
        console.error('Error adding recipe type:', error);
        next(error);
    }
});



module.exports = router;