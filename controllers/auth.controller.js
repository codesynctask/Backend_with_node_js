import fs from "fs"


export function handleLogin(req, res) {
    fs.readFile("./USERS_DATA.json", "utf-8", (err, data) => {
        if (err) res.end(err)

        const loginData = req.body//data from login form
        const parsed_user_data = JSON.parse(data)//JSON user parsed data

        if (loginData["email"] && loginData["password"]) {
            // checking if data is present in json file
            let foundData = parsed_user_data.filter((user) => user["email"] === loginData["email"] && user["password"] === loginData["password"])

            if (foundData.length > 0) {
                res.render("profile", { "user": foundData[0] })
            } else {
                res.json({
                    msg: "No user Found with given email and pass"
                })
            }

        } else {
            res.json({
                msg: "ABSENCE! check the name and password"
            })
        }
    })
}

export function handleSignup(req, res) {
    fs.readFile("./USERS_DATA.json", "utf-8", (err, data) => {
        if (err) return res.end(err);

        const signUpData = req.body//data from login form
        const parsed_user_data = JSON.parse(data)//JSON user parsed data

        // checking if data is present in json file
        if (signUpData["name"] && signUpData["email"] && signUpData["gender"] && signUpData["password"]) {

            // updating readed data
            parsed_user_data.push({
                "id": parsed_user_data[parsed_user_data.length - 1].id + 1,
                ...signUpData
            })

            // writing the update into file
            fs.writeFile("./USERS_DATA.json", JSON.stringify(parsed_user_data), (err) => res.end(err));
            res.redirect("/login")

        } else {
            res.json({
                msg: "ABSENCE! check the signup field is filled properly!!"
            })
        }
    })
    
}
