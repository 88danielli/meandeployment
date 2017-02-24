var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
        name: {type: String, required: true},
        image_url: {type: String},
        description: {type: String},
        quantity: {type: Number}
    }, {timestamps: true});
mongoose.model('Product', ProductSchema);
