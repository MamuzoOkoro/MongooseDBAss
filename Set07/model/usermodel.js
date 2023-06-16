const { Module } = require("module")
const mongoose = require("mongoose")

const Userschema = mongoose.Schema({
    name:{
        type: String
    },
    age:{
        type: String
    },
    phonenum:{
        type: Number
    },
    address:{
        type: String
    },
    Gender:{
        type: String
    }
})

const Usermodel = mongoose.model("student",Userschema)

module.exports = Usermodel