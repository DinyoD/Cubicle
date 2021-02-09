const { Router } = require('express');
const routes = Router();

routes.get('/register', (req, res) => {
    res.render('register');
})

routes.get('/login', (req, res) => {
    res.render('login');
})


module.exports = routes;