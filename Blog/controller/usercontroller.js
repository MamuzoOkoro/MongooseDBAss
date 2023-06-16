const express = require("express")
const Usermodel = require("../model/usermodel")

// get all users
const getAllusers = async(req,res) => {
    try {
        
        const getusers = await Usermodel.find();
        return res.status(200).json({
            message: "gotten all users",
            data: getusers
        })
    } catch (error) {
        res.status(404).json({
            message: "could`t get all users"
        })
    }

}

// creating users
const newuser = async() => {
    try {
        const { title, content,author, date, views} = req.body

        const createusers = await Usermodel.create({
            title,
            content,
            author,
            date,
            views
        })
        res.status(201).json({
            message: "created a new users",
            data: createusers,
        })
    } catch (error) {
        res.status(404).json({
            message: "could`t get all users"
        })
    }
}