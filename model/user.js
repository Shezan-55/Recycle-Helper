const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    userName:{
        type:String,
        unique: true
    },

    email:{
        type:String,
        unique: true
    },

    password:{
        type:String,
    }
},{timestamps: true})

const model = mongoose.model("user",userSchema);


module.exports= model;