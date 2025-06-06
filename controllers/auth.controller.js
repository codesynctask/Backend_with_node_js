import fs from "fs"
import { User } from "../models/User.js"


export async function handleLogin(req, res) {
    const loginData = req.body//data from login form

    if (loginData["email"] && loginData["password"]) {
        // checking if data is present in json file
        let foundData = await User.findOne({ "email": loginData["email"], "password": loginData["password"] })

        if (foundData) {
            res.render("profile", { "user": foundData })
        } else {
            res.json({ msg: "No user Found with given email and pass" })
        }

    } else {
        res.json({
            msg: "ABSENCE! check the name and password"
        })
    }
}

export async function handleSignup(req, res) {
    const signUpData = req.body//data from login form
    // checking if data is present in json file
    if (signUpData["name"] && signUpData["email"] && signUpData["gender"] && signUpData["password"]) {

        const allUserDocument = await await User.find()
        signUpData["_id"] = allUserDocument[allUserDocument.length - 1]["_id"] + 1

        const newSignUser = await User.insertOne(signUpData)
        res.redirect("/login")

    } else {
        res.json({
            msg: "ABSENCE! check the signup field is filled properly!!"
        })
    }
}
