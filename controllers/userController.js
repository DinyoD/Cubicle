const { Router } = require('express');
const routes = Router();
const { COOKIE_NAME } = require('../config/config');
const isGuest = require('../middlewares/isGuest');
const isAuthenticated =  require('../middlewares/isAuthenticated');
const userService = require('../services/userService');


routes.get('/register', isGuest,  (req, res) => {
    res.render('register');
})

routes.post('/register', isGuest, async (req, res) => {
    
    const {username, password, repeatPassword} = req.body;

    if (password !== repeatPassword) {
        return res.render('register', {message: 'Passwords missmatch!'});
    }
    
    try {

        await userService.register({username, password});
        res.redirect('/user/login');
        console.log('reg');
    } catch (error) {

        res.render('register', { error })
    }
})

routes.get('/login', isGuest, (req, res) => {
    res.render('login');
})

routes.post('/login', isGuest, async (req, res) => {
    const {username, password} = req.body;

    try {
        let token = await userService.login({username, password});
        res.cookie(COOKIE_NAME, token, {
            httpOnly: true,
        })
        res.redirect('/products')
    } catch (error) {
        res.render('login', {error})
    }
})

routes.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/products');
})


module.exports = routes;