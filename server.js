const { request } = require("express");
const express = require("express");
//call dotenv module
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

// call the connectDB export
const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path: 'config.env'});
// const for port 
//const { PORT = 3000 } = process.env;
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));

// mongodb connect function   THIS IS WHAT IS FUCKING THIS UP
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

//set view engine type as (express)
app.set("view engine","ejs");
//app.set("views", path.resolve(__dirname,"views/ejs"))

// load assets from directory
app.use('/css', express.static(path.resolve(__dirname,"assets/css")));
app.use('/img', express.static(path.resolve(__dirname,"assets/img")));
app.use('/js', express.static(path.resolve(__dirname,"assets/js")));


//load routers
app.use('/',require('./server/routes/router'));



// listener for now
app.listen(PORT,()=> {console.log(`Server is running on http://localhost:${PORT}`)});
