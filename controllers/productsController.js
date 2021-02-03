const { Router } = require('express');
const productService = require('../services/productService');
const { validateProduct } = require('./helpers/productHelpers');

const routes = Router();

routes.get('/', (req, res) => {
    productService.getAll()
        .then((products) => {
            res.render('home', {title: 'Home', products});
        })
        .catch(()=>res.status(500).end());
})  

routes.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
})

routes.post('/create',validateProduct, (req, res) => {
    let data = req.body;
    productService.create(data)
        .then(res.redirect('/products'))
        .catch(()=>res.status(500).end());
})

routes.get('/details/:productId', (req, res) => {
    let product = null;
    res.render('details', {product})
})

module.exports = routes;