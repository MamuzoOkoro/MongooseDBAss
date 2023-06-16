const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    Brand:{
        type: String
    },
    Year:{
        type: String
    },
    Color:{
        type: String
    },
    Model:{
        type: String
    },
})

const Usermodel = mongoose.model("1Car",UserSchema)

module.exports = Usermodel