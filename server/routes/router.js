const express = require('express');
// calling a method of express
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');



// root route using get method, calling services 
route.get('/', services.homeRoutes);   

/**
 * @description for add user
 * @method GET /add-user
 */
route.get('/add-user', services.add_user);  

/**
 * @description for update user
 * @method GET /update-user
 */
route.get('/update-user', services.update_user);


//API route path of post creation with callback functions create, find etc
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

// exports route variable for use in server.js
module.exports = route