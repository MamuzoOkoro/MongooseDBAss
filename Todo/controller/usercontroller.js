const express = require("express")
const Usermodel = require("../model/usermodel")

// geting All users
const getAllusers = async(req,res) => {
    try {
        
        const getUsers  = await Usermodel.find()
        res.status(200).json({
            message: "geotten all users",
            data: getUsers,
        })
    } catch (error) {
        res.status(404).json({
            message: "could1`t get all users"
        })
    }
}

// creating users
const newUsers  = async() => {
    try {
        
        const {title,description,date,complete} = req.body

        const createUser = await Usermodel.create({
            title,
            description,
            date,
            complete,
        })
        res.status(201).json({
            message: "created new user",
            data: createUser,
        })
    } catch (error) {
        res.status(404).json({
            message: "could1`t create users"
        })
    }
}
// get one user
const getSingleUser = async(req,res) => {
    try {
         // const { userid } = req.params
        // const getone = await userModel.findById(userid)
       
        const getone = await userModel.findById(req.params.userId)
        return res.status(200).json({
            message: "get single user",
            data: getone
        })
    } catch (error) {
        return res.status(400).json({
            message: "can't get one user"
        })
    }
}

module.exports = { getAllusers, newuser, getSingleUser}