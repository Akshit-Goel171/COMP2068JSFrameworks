const mongoose = require('mongoose')

const schemaDefinition = {
    recipeType: {
        type: String,
        required: true
    }
};

const recipeTypeSchema = new mongoose.Schema(schemaDefinition);

module.exports = mongoose.model('Recipe Type', recipeTypeSchema);