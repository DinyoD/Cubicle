const { Router } = require('express');
const productService = require('../services/productService');
const accessoryService = require('../services/accessoryService');
const { validateProduct } = require('./helpers/productHelpers');
const isCreator = require('../middlewares/isCreator');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = Router();

router.get('/', (req, res) => {
    console.log(req.locals);
    productService.getAll(req.query)
        .then((products) => {
            res.render('home', {title: 'Home', products});
        })
        .catch(()=>res.status(500).end());
})  

router.get('/create',isAuthenticated, (req, res) => {
    
    res.render('create', {title: 'Cube Create'});
})

router.post('/create',isAuthenticated, validateProduct, (req, res) => {

    productService.create(req.body, req.user._id)
        .then(res.redirect('/products'))
        .catch(()=>res.status(500).end());
})

router.get('/details/:productId', (req, res) => {
    productService.getById(req.params.productId)
    .then((cube)=> {
        res.render('details', {title: 'Cube Details', cube})
    })
    .catch(()=> res.status(500).end());
    
})

router.get('/:productId/attach',isAuthenticated, isCreator, async (req, res) => {
    let cube = await productService.getById(req.params.productId)
    let accessories = await accessoryService.getAllUnattached(cube.accessories);

    res.render('attachAccessory', {cube, accessories})
})

router.post('/:productId/attach',isAuthenticated, isCreator, async (req, res) => {
    productService.AttachAccesssory(req.params.productId, req.body.accessory)
        .then(()=> res.redirect(`/products/details/${req.params.productId}`))
        .catch(() => res.status(500).end())
})

router.get('/edit/:productId',isAuthenticated, isCreator, (req, res) => {

    productService.getById(req.params.productId)
        .then(cube => res.render('edit', {cube}))
        .catch(() => res.status(500).end());
});

router.post('/edit/:productId',isAuthenticated, isCreator, (req, res) => {

    productService.updateOne(req.params.productId, req.body)
    .then(() => res.redirect(`/products/details/${req.params.productId}`))
    .catch(() => res.status(500).end())
});

router.get('/delete/:productId',isAuthenticated, isCreator, (req, res) => {
    productService.getById(req.params.productId)
        .then(cube => res.render('delete', {cube}))
})

router.post('/delete/:productId',isAuthenticated, isCreator, (req, res) => {
    productService.deleteOne(req.params.productId)
        .then(() => res.redirect('/products'))
        .catch(() => res.status(500). end())
})

module.exports = router;