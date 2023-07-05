const mongoose = require('mongoose');
const usermodel2 = new mongoose.Schema({
    
    uname:String,
    rno:String,
    pno:String,
});

exports.users1 = mongoose.model("register",usermodel2,"register");