const mongoose = require('mongoose');
// create Schema for userdb in mongodb
var schema = new mongoose.Schema({
    name :{
        type : String,
        required: true
    },
    email :{
        type: String,
        required: true,
        unique: true
    },
    sucks : String,
    status : String
})

// call model method of mongoose
// schema creates the shape of the document
const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;