const mongoose = require('mongoose');

let accessorySchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
    },
    name: {
        type: String,
        require: true,
    },
    imageUrl: {
        type: String,
        require: true,
        validate: /^https?/,
    },
    description: {
        type: String,
        require: true,
        maxlength: 50,
    },
    cubes: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cube'
    }]
})