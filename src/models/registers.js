const mongoose = require("mongoose");

const userSchema = new  mongoose.Schema({
    first_name:{
        type:String,
        required:[true,'must provide name'],
        trim:true
    },
    last_name:{
        type:String,
        required:[true,'must provide name'],
        trim:true

    },
    email:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        unique:true

    },
    password:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        

    },
    area_code:{
        type:String,
    },
    phone:{
        type:Number,
    },
     
})

const Register = new mongoose.model("User",userSchema);

module.exports = Register;