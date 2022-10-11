
//connect axios api
const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('https://dev-quebec.herokuapp.com/api/users')
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
    axios.get('https://dev-quebec.herokuapp.com/api/users', { params : { id : req.query.id }}) // finds the user selected by id
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})   // populates form with that specific user for edit
        })                                                       //from update_user.ejs
        .catch(err =>{
            res.send(err);
        })
}