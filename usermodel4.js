const mongoose = require('mongoose');
const usermodel4 = new mongoose.Schema({
    
    pname:String,
    rate:String,
});

exports.userss = mongoose.model("seller",usermodel4,"seller");