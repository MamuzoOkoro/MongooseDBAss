const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    date:{
        type: String
    },
    complete:{
        type: Boolean
    },
})

const Usermodel = mongoose.model("1Todo",UserSchema)

module.exports = Usermodel