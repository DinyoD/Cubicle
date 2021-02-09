const { Router } = require('express');
const routes = Router();

const userService = require('../services/userService');

routes.get('/register', (req, res) => {
    res.render('register');
})

routes.post('/register', async (req, res) => {
    
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

routes.get('/login', (req, res) => {
    res.render('login');
})

routes.post('/login', (req, res) => {
    const {username, password} = req.body;


})


module.exports = routes;