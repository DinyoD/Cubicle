const mongoose = require('mongoose');

module.exports = (app) => {
    mongoose.connect('mongodb://localhost:27017/cubicle');

    const db = mongoose.Connection;

    db.on("error", console.error.bind(console, 'connection error:'))
    db.once("open", console.log.bind(console, 'db connected...'))
}