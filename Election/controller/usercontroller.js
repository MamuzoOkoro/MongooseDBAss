const express = require("express")
const Usermodel = require("../model/usermodel")

const getallusers = async() => {
    try {
        
        const getuser = await Usermodel.find()
        res.status(200).json({
            message: "gotten all users",
            data: getuser
        })
    } catch (error) {
        res.status(404).json({
            message: "could`t get all users"
        })
    }
}

const creatingnewuser = async() => {
    try {
        
        const {CandidateName,CandidateParty,CandieAge,CandidateOccupation} = req.body
        const createuser = await Usermodel.create({
            CandidateName,
            CandidateParty,
            CandieAge,
            CandidateOccupation
        })
        res.status(200).json({
            message: "gotten all users",
            data: createuser
        })
    } catch (error) {
        res.status(404).json({
            message: "could`t get all users"
        })
    }
}