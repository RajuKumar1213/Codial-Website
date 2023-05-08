const mongoose = require("mongoose");
const { Schema } = mongoose;


const userSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    confirm_pass : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },

} , {
    timeStamps : true
});

// const User =;
module.exports =  mongoose.model("user" , userSchema);