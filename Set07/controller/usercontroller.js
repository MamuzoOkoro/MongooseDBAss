const express = require("express")
const Usermodel = require("../model/usermodel")

// get All users
const getAllUsers = async(req,res) => {
    try {
        const getusers = await Usermodel.find()
        res.status(200).json({
            message: "gotten all users",
            data: getusers,
        })
    } catch (error) {
        res.status(404).json({
            message: "could`t get all users"
        })
    }
} 

// Create user
const newuser = async(req,res) => {
    try {
        const { name, age, phonenum, address, Gender} = req.body

        const createuser = await Usermodel.create({
            name,
            age,
            phonenum,
            address,
            Gender
        })
        res.status(201).json({
            message: "created new user",
            data: createuser,
        })
    } catch (error) {
        res.status(404).json({
            message: "could`t create new user"
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