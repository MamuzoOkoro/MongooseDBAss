const mongoose  =require("mongoose")

const Userschema = mongoose.Schema({
    title:{
        type: String
    },
    content:{
        type: String
    },
    author:{
        type: String
    },
    date:{
        type: String
    },
    views:{
        type: String
    },
})

const Usermodel = mongoose.model("FirstBlog",Userschema)

module.exports = Usermodel