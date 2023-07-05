const mongoose = require('mongoose');
const usermodel1 = new mongoose.Schema({
    
    email:String,
    pass:String,
});

exports.users = mongoose.model("login",usermodel1,"login");
    