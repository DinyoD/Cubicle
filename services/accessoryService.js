const  Accessory = require('../models/Accessory');

function create(data){
    let accessory = new Accessory(data);

    return accessory.save();
}
function getAllUnattached(accessoriesIds){
    return Accessory.find({_id : {$nin: accessoriesIds}}).lean();
}

function getById(id){
    return Accessory.find({_id: id}).lean();
}

module.exports = {
    create,
    getAllUnattached,
    getById,
}