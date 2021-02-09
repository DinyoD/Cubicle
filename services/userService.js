const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {SALT_ROUNDS} = require('../config/config');


const register = async({username, password}) => {
    let userWithSameName = await User.findOne({username: username}).lean();
    
    if (userWithSameName) {
        throw new Error('this username already exist!');
    }

    let salt = await bcrypt.genSalt(SALT_ROUNDS);
    let hash = await bcrypt.hash(password, salt);

    const user = new User({username, password: hash});

    return await user.save();
}


module.exports = {
    register,
};