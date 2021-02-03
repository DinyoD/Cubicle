const Cube = require('../models/Cube');

function create(data){
    let cube = new Cube(data)
    return cube.save();
}

async function getAll(){
    return await Cube.find({}).lean();
    
}

async function getById(id){
    return await Cube.findById(id).lean();
}

module.exports = {
    create,
    getAll,
    getById
}