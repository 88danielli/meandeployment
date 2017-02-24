var mongoose = require('mongoose');

var Customer = mongoose.model('Customer');

module.exports = {
    getCustomers: function(req, res) {
        Customer.find({}, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        })
    },
    createCustomer: function(req, res) {
        var newCustomer = new Customer(req.body);
        console.log(newCustomer);
        newCustomer.save(function(err, data) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                res.json(data)
            }
        })
    }




}
