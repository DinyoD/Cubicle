const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

function create(data){
    let cube = new Cube(data)
    return cube.save();
}

async function getAll(query){
   
    let textSearch = query.search ? query.search : '';
    let from = query.from ? query.from : 1;
    let to = query.to ? query.to : 6;
   
    let result =  await Cube.find({ 
        name: {$regex: `.*${textSearch}.*`, $options: 'i'},
        difficultyLevel: {$gte: from, $lte: to}
    }).lean();
    return result;
}

function getById(id){
    return Cube.findById(id).populate('accessories').lean();
}

async function AttachAccesssory(cubeId, accessoryId){
    let cube = await Cube.findById(cubeId);
    let accessory = await  Accessory.findById(accessoryId);

    cube.accessories.push(accessory);
    return cube.save();
}

module.exports = {
    create,
    getAll,
    getById,
    AttachAccesssory,
}