const { Router } = require('express');
const routes = Router();

routes.get('/', (req, res) => {
    res.render('home', {'layout': false})
})

module.exports = routes;