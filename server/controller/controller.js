
// create var to use Schema from model.js
var Userdb = require('../model/model');

// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Can not be empty!"});
        return;
    }

    // new user if there is a body entered!
    // Data is matched to the schema in model.js
    const user = new Userdb({
        name : req.body.name,
        email : req.body.email,
        sucks: req.body.sucks,
        status : req.body.status
    })

    // save user in the database
    user
        .save(user)  // saves the object "user" in db
        .then(data => { // uses then promise
            //res.send(data)
            res.redirect('/add-user');  // form inside _form.ejs tied to add_user.ejs
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating"
            });
        });

}

// retrieve and return all users/ retrieve and return a single user i hope
exports.find = (req, res)=>{  

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "User not found with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving user with id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retrieving user information" })
            })
    }

    
}

// Update a new identified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Can not be empty!"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}.  User not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

// Delete a user with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;     // id passes through this variable

    Userdb.findByIdAndDelete(id)   // id passes through this object
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}