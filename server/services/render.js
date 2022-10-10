
//connect axios api
const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://127.0.0.1:3000/api/users')    // test for heroku
        .then(function(response){    // get the promise from then method
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}
// adds users to db
exports.add_user = (req, res) =>{
    res.render('add_user');
}
// allows edit of user info
exports.update_user = (req, res) =>{
    axios.get('http://127.0.0.1:3000/api/users', { params : { id : req.query.id }}) // finds the user selected by id
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})   // populates form with that specific user for edit
        })                                                       //from update_user.ejs
        .catch(err =>{
            res.send(err);
        })
}