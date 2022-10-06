const { request } = require("express");
const express = require("express");
//call dotenv module
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const app = express();

dotenv.config({path: 'config.env'});
// const for port 
//const { PORT = 3000 } = process.env;
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

//set view engine type as (express)
app.set("view engine","ejs");
/* resolves directory name to resolve method
this is when you put all the ejs files into an ejs folder*/
//app.set("views", path.resolve(__dirname,"views/ejs"))

// load assets from directory
app.use('/css', express.static(path.resolve(__dirname,"assets/css")));
app.use('/img', express.static(path.resolve(__dirname,"assets/img")));
app.use('/js', express.static(path.resolve(__dirname,"assets/js")));


// default route
app.get('/', async (req,res)=>{
    // call render response
    // app.set("view engine","ejs") will know the file extension
    res.render("index");
});

// listener for now
app.listen(PORT,()=> {console.log(`Server is running on http://localhost:${PORT}`)});
