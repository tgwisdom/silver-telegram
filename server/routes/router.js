const express = require('express');
// calling a method of express
const route = express.Router();

const services = require('../services/render');



// root route using get method, calling services 
route.get('/',services.homeRoutes);   


route.get('/add_user', services.add_user);


route.get('/update_user', services.update_user);

module.exports = route