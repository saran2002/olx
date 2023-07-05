const mongoose = require('mongoose');
const usermodel3 = new mongoose.Schema({
    
    tarea:String,
});

exports.users2 = mongoose.model("feedback",usermodel3,"feedback");