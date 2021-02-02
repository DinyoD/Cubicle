const { Router } = require('express');
const routes = Router();

routes.get("/", (req, res) => {
    res.render('home', {'layout': false});
});

routes.get('/about', (req, res) => {
    res.render('about', {'layout': false} )
});

module.exports = routes;