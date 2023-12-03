// Import express and create a router object
const express = require('express');
const router = express.Router();
const Project = require('../models/project');

// GET handlers for projects
router.get('/', (req, res, next) => {
    Project.find()
        .then(projects => {
            res.render('projects/index', { title: "Recipe Book", dataset: projects });
        })
        .catch(err => {
            console.log(err);
        });
});

router.get('/add', (req, res, next) => {
    res.render('projects/add', { title: "Add a new Recipe" });
});

router.post('/add', (req, res, next) => {
    Project.create({
        recipeType: req.body.recipeType,
        recipeName: req.body.recipeName,
        ingredients: req.body.ingredients
    })
        .then(newProject => {
            res.redirect('/projects');
        })
        .catch(err => {
            console.log(err);
        });
});

// export the router object to make it available in app.js
module.exports = router;
