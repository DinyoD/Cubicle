const { Router } = require('express');
const { route } = require('./controllers/homeController');
const routes = require('./controllers/homeController');
const router = Router();
const homeController = require('./controllers/homeController');
const productsController = require('./controllers/productsController');
const accessoriesController = require('./controllers/accessoriesController');
const userController = require('./controllers/userController');

router.use('/', homeController);
routes.use('/products', productsController);
routes.use('/accessories', accessoriesController)
routes.use('/user', userController)
routes.get('*', (req, res) => {
    res.render('404', {title: 'Page not found'})
})

module.exports = router;