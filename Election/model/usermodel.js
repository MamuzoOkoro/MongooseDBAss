const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    CandidateName:{
        type: String
    },
    CandidateParty:{
        type: String
    },
    CandieAge:{
        type: String
    },
    CandidateOccupation:{
        type: String
    },
})

const Usermodel = mongoose.model("1Election",UserSchema)

module.exports = Usermodel