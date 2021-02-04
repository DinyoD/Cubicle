const Cube = require('../models/Cube');

function create(data){
    let cube = new Cube(data)
    return cube.save();
}

async function getAll(query){
   
    let textSearch = query.search ? query.search : '';
    console.log(textSearch);
    let from = query.from ? query.from : 1;
    console.log(from);
    let to = query.to ? query.to : 6;
    console.log(to);
    
    let result =  await Cube.find({ 
        name: {$regex: `.*${textSearch}.*`, $options: 'i'},
        difficultyLevel: {$gte: from, $lte: to}
    }).lean();
    console.log(result);
    return result;
}

async function getById(id){
    return await Cube.findById(id).lean();
}

module.exports = {
    create,
    getAll,
    getById
}