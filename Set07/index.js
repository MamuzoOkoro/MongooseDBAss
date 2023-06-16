const express = require("express")
require("./config/Database")

const port = 1444;

const app = express();

app.get("/", (req,res) => {
    try {
        
        return res.status(200).json({
            message: "Api is ready"
        })
    } catch (error) {
        console.log("error",error)
    }
})

app.listen(port, () => {
    console.log("server is now listening",port)
})