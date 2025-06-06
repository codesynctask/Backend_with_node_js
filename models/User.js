import mongoose from "mongoose";

const user_schema = new mongoose.Schema(
    {
        "_id": Number,
        "name": String,
        "email": String,
        "gender": String,
        "job": String,
        "password":String
    }
)

// Model in node js ----> Collection in mongoDB
export const User = mongoose.model("User",user_schema)


