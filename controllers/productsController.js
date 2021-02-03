const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
    res.render('home', {title: 'Home'});
})

routes.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
})

routes.get('/details/:productId', (req, res) => {
    let product = null;
    res.render('details', {product})
})

module.exports = routes;