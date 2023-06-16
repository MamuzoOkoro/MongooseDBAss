const mongoose = require("mongoose")
const { db } = require("../model/usermodel")

const Set07DB = "mongodb://0.0.0.0://27017/Set07Database"
const Set07DB1 = "mongodb://0.0.0.0://27017/Set07Database"
const Set07DB2 = "mongodb://0.0.0.0://27017/Set07Database"
const liveUrl = "mongodb+srv://Esther:Esther2004@cluster0.byfqhoj.mongodb.net/Set07DataBase?retryWrites=true&w=majority"

const  Database = async() => {
    try {
        
        const dbconnect = await mongoose.connect(liveUrl)
        console.log("")
        console.log(`server is connected ${dbconnect.connection.host}`)
    } catch (error) {
        console.log("error",error)
    }
}

module.exports = Database()