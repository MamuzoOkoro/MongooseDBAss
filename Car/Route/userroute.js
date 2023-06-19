const express = require("express");
const { getAllusers, getSingleUser, newuser } = require("../controller/usercontroller");


const userRouter  = express.Router();

// get all users endpoints
userRouter.route("/getstudent").get(getAllusers)

// get single user endpoints
userRouter.get("/getone/:userId", getSingleUser)

// create a new user
userRouter.post("/createuser", newuser)


module.exports = userRouter