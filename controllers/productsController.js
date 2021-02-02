const { Router } = require('express');

const routes = Router();

routes.get('/create', (req, res) => {
    res.render('create', {'layout': false});
})

routes.get('/details/:productId', (req, res) => {
    let product = null;
    res.render('details', {product})
})

module.exports = routes;