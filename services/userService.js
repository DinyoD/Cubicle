const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {SALT_ROUNDS, SECRET} = require('../config/config');


const register = async({username, password}) => {
    let userWithSameName = await User.findOne({username: username}).lean();
    
    if (userWithSameName) {
        throw {message: 'This username already exist!'};
    }

    let salt = await bcrypt.genSalt(SALT_ROUNDS);
    let hash = await bcrypt.hash(password, salt);

    const user = new User({username, password: hash});

    return await user.save();
}

const login = async({username, password}) => {
    let user = await User.findOne({username: username}).lean();
    if (!user) {
        throw {message: 'User not found!'}
    }

    let corectPassword = await bcrypt.compare(password, user.password);
    if (!corectPassword) {
        throw {message: 'Wrong password!'};
    }
    let token = jwt.sign({_id: user._id, roles: ['admin']}, SECRET);
    
    return token;
}


module.exports = {
    register,
    login,
};