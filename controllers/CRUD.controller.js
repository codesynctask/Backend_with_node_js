import fs from "fs"
import { User } from "../models/User.js";

export async function handleCreateUser(req, res) {
    // fs.readFile("./USERS_DATA.json", "utf-8", function (err, data) {
    //     if (err) console.error(err);

    //     const parsed_data = JSON.parse(data);

    //     // req.body
    //     const newUser = req.body || {};
    //     let newId = parsed_data[parsed_data.length - 1].id + 1

    //     // adding new user to readed data
    //     parsed_data.push({
    //         "id": newId,
    //         ...newUser
    //     })

    //     // writing back readed data
    //     fs.writeFile("./USERS_DATA.json", JSON.stringify(parsed_data), "utf-8", function (err) {
    //         if (err) console.error(err);
    //         res.json({
    //             "msg": `new user added with id ${newId}`,
    //             newUser
    //         })

    //     })

    // })


    // CREATE Using MongoDB
    const newUser = req.body || {};
    try {
        const allUserFromCollection = await User.find()
        newUser["_id"] = allUserFromCollection[allUserFromCollection.length - 1]["_id"] + 1
        console.log(newUser)
        try {
            await User.insertOne(newUser)
            console.log("User inserted")
        } catch (error) {
            console.error("Read Error", error)
        }

    } catch (error) {
        console.error("Read Error", error)
    }

}

export async function handleShowAllUsers(req, res) {
    // fs.readFile("./USERS_DATA.json", "utf-8", function (err, data) {
    //     if (err) console.error(err);

    //     const parsed_data = JSON.parse(data);
    //     res.json(parsed_data)
    // })

    try {
        const allUserFromCollection = await User.find()
        console.log("all data readed from db")
        res.json(allUserFromCollection)
    } catch (error) {
        console.error("READ Error : ", error)
    }
}

export function hanleShowOneUser(req, res) {
    fs.readFile("./USERS_DATA.json", "utf-8", function (err, data) {
        if (err) console.error(err);

        const parsed_data = JSON.parse(data);
        let found_user = parsed_data.find((user) => user.id == req.params.id)
        res.json(found_user)
    })
}

export function handleUpdateUser(req, res) {
    fs.readFile("./USERS_DATA.json", "utf-8", function (err, data) {
        if (err) console.error(err);

        const parsed_data = JSON.parse(data);

        // req.body
        const update_for_user = req.body || {};

        // adding new user to readed data
        const updatedUsers = parsed_data.map(user =>
            user.id == req.params.id ? { ...user, ...update_for_user } : user
        );

        // writing back readed and updated data
        fs.writeFile("./USERS_DATA.json", JSON.stringify(updatedUsers), "utf-8", function (err) {
            if (err) console.error(err);
            res.json({
                "msg": `User with Id is Updated with below data`,
                update_for_user,
                updatedUsers
            })

        })

    })
}

export function handleDeleteUser(req, res) {
    fs.readFile("./USERS_DATA.json", "utf-8", function (err, data) {
        if (err) console.error(err);

        const parsed_data = JSON.parse(data);

        // deleting user from readed data
        const deleted_user = parsed_data.filter((user) => user.id != req.params.id);

        // writing back after deleting user
        fs.writeFile("./USERS_DATA.json", JSON.stringify(deleted_user), "utf-8", function (err) {
            if (err) console.error(err);
            res.json({
                "msg": `User with ${req.params.id} is deleted with below data`,
                deleted_user
            })

        })

    })
}