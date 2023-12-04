// Import express and create a router object
const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const recipeType = require('../models/recipeType')

// GET handlers for projects
router.get('/', (req, res, next) => {
    Project.find()
        .then(projects => {
            res.render('projects/index', { title: "RECIPE BOOK", dataset: projects });
        })
        .catch(err => {
            console.log(err);
        });
});


// GET handler for adding new recipe 
router.get('/add', (req, res, next) => {
    res.render('projects/add', { title: "ADD A NEW RECIPE" });
//     recipeType.find((err, recipeTypes) => {
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.render('recipeTypes/add', {title: "Add a new recipe Type", recipeTypes: recipeTypes});
//         }
//     })
// .sort({name: 1});
});







// POST handler after a recipe is added 
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


// GEt handler for project delete 
router.get('/delete/:_id', (req, res, next) => {
    Project.findOneAndDelete({
        _id: req.params._id
    })
    .then((result) => {
        // Handle the result if needed
        res.redirect("/projects");
    })
    .catch((err) => {
        console.log(err);
        // Handle the error appropriately
        res.redirect("/projects"); // or any other error handling logic
    });
});



// GET handler for project edit
router.get('/edit/:_id', async (req, res, next) => {
    try {
        const project = await Project.findById(req.params._id).exec();

        if (!project) {
            // Handle the case where the project is not found
            return res.status(404).send('Project not found');
        }

        const recipeTypes = await recipeType.find().exec();

        res.render('projects/edit', { title: 'Edit the recipe', project, recipeTypes });
    } catch (err) {
        console.error(err);
        // Send a more detailed error response
        return res.status(500).send(`Internal Server Error: ${err.message}`);
    }
});




// POST handler for /project/edit/_id
router.post('/edit/:_id', async (req, res, next) => {
    try {
        const updateProject = await Project.findOneAndUpdate(
            { _id: req.params._id },
            {
                recipeName: req.body.recipeName,
                recipeType: req.body.recipeType,
                ingredients: req.body.ingredients
            },
            { new: true } // Return the updated document
        ).exec();

        if (!updateProject) {
            // Handle the case where the project is not found
            return res.status(404).send('Project not found');
        }

        res.redirect('/projects');
    } catch (err) {
        console.error(err);
        // Handle the error appropriately
        return res.status(500).send(`Internal Server Error: ${err.message}`);
    }
});



// export the router object to make it available in app.js
module.exports = router;


// Used async in post and get because the one that was taught in class was not supported in my laptop.
//  It had something to do with the mongoose version