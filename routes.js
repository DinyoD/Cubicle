const { Router } = require('express');
const routes = require('./controllers/homeController');
const router = Router();
const homeController = require('./controllers/homeController');
const productsController = require('./controllers/productsController');

router.use('/', homeController);
routes.use('/products', productsController);

module.exports = router;