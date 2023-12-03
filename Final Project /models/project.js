// import mongoose
const mongoose = require('mongoose')

// Create schema definition object 
const schemaDefinition = {
    recipeType: {
        type: String,
        required: false
    },
    recipeName: {
        type: String, 
        required: true
    },
    ingredients: {
        type: String,
        required: false
    }

};

//  Create mongoose schema using def object 
var mongooseSchema = new mongoose.Schema(schemaDefinition);

// Create and export a mongoose model 
module.exports = mongoose.model('Project', mongooseSchema)
