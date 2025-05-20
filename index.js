// imports
import express, { urlencoded } from "express"
import fs from "fs"

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));


// routes

// 1. CREATE
app.post("/", function (req, res) {
    fs.readFile("./USERS_DATA.json", "utf-8", function (err, data) {
        if (err) console.error(err);

        const parsed_data = JSON.parse(data);

        // req.body
        const newUser = req.body || {};
        let newId = parsed_data[parsed_data.length - 1].id + 1

        // adding new user to readed data
        parsed_data.push({
            "id": newId,
            ...newUser
        })

        // writing back readed data
        fs.writeFile("./USERS_DATA.json", JSON.stringify(parsed_data), "utf-8", function (err) {
            if (err) console.error(err);
            res.json({
                "msg": `new user added with id ${newId}`,
                newUser
            })

        })

    })
})



// 2. READ
app.get("/", function (req, res) {
    fs.readFile("./USERS_DATA.json", "utf-8", function (err, data) {
        if (err) console.error(err);

        const parsed_data = JSON.parse(data);
        res.json(parsed_data)
    })
})

app.get("/:id", function (req, res) {
    fs.readFile("./USERS_DATA.json", "utf-8", function (err, data) {
        if (err) console.error(err);

        const parsed_data = JSON.parse(data);
        let found_user = parsed_data.find((user) => user.id == req.params.id)
        res.json(found_user)
    })
})



// 3. UPDATE
app.patch("/:id", function (req, res) {
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
})



// 4. DELEET
app.delete("/:id", function (req, res) {
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
})


// listen server 
app.listen(8000, function (err) { console.log(`Server Started at http://localhost:8000`) })

