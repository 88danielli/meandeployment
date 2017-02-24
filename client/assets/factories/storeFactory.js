app.factory('StoreFactory', function($http) {
    console.log("Store Factory loaded");
    var factory = {};

    factory.getProducts  = function(callback) {
        $http.get('/products').then(function(res) {
          if (typeof callback === 'function') {
            callback(res.data);
          }
        })
      }
    factory.createProduct = function(newProduct, callback) {
        $http.post('/products', newProduct).then(function(res) {
          console.log(res.data);
          if (typeof callback === 'function') {
            callback(res.data);
          }
        })
      }
    factory.getCustomers  = function(callback) {
        $http.get('/customers').then(function(res) {
            if (typeof callback === 'function') {
              callback(res.data);
            }
          })
        }
    factory.createCustomer = function(newCustomer, callback) {
        $http.post('/customers', newCustomer).then(function(res) {
            console.log(res.data);
            if (typeof callback === 'function') {
              callback(res.data);
            }
          })
        }
    return factory;
    });
