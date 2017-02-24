var customer = require('./../controllers/customers.js');
    product = require('./../controllers/products.js');
module.exports = function(app) {
  app.get('/customers', function(req, res) {
    customer.getCustomers(req, res);
  })
  app.get('/products', function(req, res) {
      product.getProducts(req, res);
  })
  app.post('/customers', function(req, res) {
      customer.createCustomer(req, res);
  })
  app.post('/products', function(req, res) {
      product.createProduct(req, res);
  })







  }
