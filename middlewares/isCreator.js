const productService = require('../services/productService');

module.exports = function(req, res, next){

    productService.getById(req.params.productId)
        .then((cube) => {
            if (cube.creator !=  req.user._id) {
                console.log('redirect');
                return res.redirect('/products');
            }
        })
    next();
}