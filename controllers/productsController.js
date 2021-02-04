const { Router } = require('express');
const productService = require('../services/productService');
const { validateProduct } = require('./helpers/productHelpers');

const routes = Router();

routes.get('/', (req, res) => {
    console.log(req.query);
    productService.getAll(req.query)
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
    productService.getById(req.params.productId)
    .then((cube)=>res.render('details', {title: 'Details', cube})
    .catch(()=> res.status(500).end()));
    
})

module.exports = routes;