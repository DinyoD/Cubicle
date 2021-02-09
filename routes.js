const { Router } = require('express');
const { route } = require('./controllers/homeController');
const routes = require('./controllers/homeController');
const router = Router();
const homeController = require('./controllers/homeController');
const productsController = require('./controllers/productsController');
const accessoriesController = require('./controllers/accessoriesController');
const authController = require('./controllers/authController');

router.use('/', homeController);
routes.use('/products', productsController);
routes.use('/accessories', accessoriesController)
routes.use('/auth', authController)
routes.get('*', (req, res) => {
    res.render('404', {title: 'Page not found'})
})

module.exports = router;