var mongoose = require('mongoose');

var Product = mongoose.model('Product');

module.exports = {
    getProducts: function(req, res) {
        Product.find({}, function(err, data){
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        })
    },
    createProduct: function(req, res) {
        var newProduct = new Product(req.body);
        console.log(newProduct);
        newProduct.save(function(err, data) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                res.json(data)
            }
        })
    }







}
