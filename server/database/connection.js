const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,      // already included but it still works
            useUnifiedTopology:true   // removed commma here- testing 
            
        })

        console.log(`MongoDB connected :${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
// exports module connectDB to server.js
module.exports = connectDB