const jwt = require('jsonwebtoken');
const {COOKIE_NAME, SECRET} = require('../config/config');

module.exports = function(){
    return (req, res, next) => {
        let token = req.cookies[COOKIE_NAME];

        jwt.verify(token, SECRET, (err, decodedToken) => {
            if (err) {
                res.clearCookie(COOKIE_NAME);
                
            } else {
                req.user = decodedToken;
                res.locals.user = decodedToken;
                res.locals.isAuthenticated  = true;
                // req.locals.user = req.user;
                // req.locals.isAuthenticated = !req.user.anonymous;
            }
        });

        next();
    };
};