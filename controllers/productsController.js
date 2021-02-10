const { Router } = require('express');
const productService = require('../services/productService');
const accessoryService = require('../services/accessoryService');
const { validateProduct } = require('./helpers/productHelpers');

const router = Router();

router.get('/', (req, res) => {
    console.log(req.locals);
    productService.getAll(req.query)
        .then((products) => {
            res.render('home', {title: 'Home', products});
        })
        .catch(()=>res.status(500).end());
})  

router.get('/create', (req, res) => {
    res.render('create', {title: 'Cube Create'});
})

router.post('/create',validateProduct, (req, res) => {
    let data = req.body;
    productService.create(data)
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

router.get('/:productId/attach', async (req, res) => {
    let cube = await productService.getById(req.params.productId)
    let accessories = await accessoryService.getAllUnattached(cube.accessories);

    res.render('attachAccessory', {cube, accessories})
})

router.post('/:productId/attach', async (req, res) => {
    productService.AttachAccesssory(req.params.productId, req.body.accessory)
        .then(()=> res.redirect(`/products/details/${req.params.productId}`))
})

module.exports = router;