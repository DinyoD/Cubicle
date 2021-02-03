const { Router } = require('express');
const routes = Router();

routes.get("/", (req, res) => {
    res.redirect('/products');
});

routes.get('/about', (req, res) => {
    res.render('about')
});

module.exports = routes;