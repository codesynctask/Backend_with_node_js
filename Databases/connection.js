import mongoose from "mongoose";

export async function connectMongoDB(URI) {
    try {
        await mongoose.connect(URI, {
            dbName: "CRUD_User"
        })
        console.log("MongoDB Connected")
    } catch (error) {
        console.error("MongoDb Connection Error :", error)
    }
}