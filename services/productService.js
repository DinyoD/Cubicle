const Cube = require('../models/Cube');

function create(data){
    let cube = new Cube(data)
    return cube.save();
}

async function getAll(){
    let products = await Cube.find({}).lean();
    return products;
}

module.exports = {
    create,
    getAll,
}