// imports
import express, { urlencoded } from "express"
import fs from "fs"
import { handleCreateUser, handleShowAllUsers, hanleShowOneUser, handleUpdateUser, handleDeleteUser } from './controllers/CRUD.controller.js';

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));


// routes

// 1. CREATE
app.route("/")
    .post(handleCreateUser)

// 2. READ
    .get(handleShowAllUsers)


app.route("/:id")
    .get(hanleShowOneUser)

// 3. UPDATE
    .patch(handleUpdateUser)

// 4. DELEET
    .delete(handleDeleteUser)


// listen server 
app.listen(8000, function (err) { console.log(`Server Started at http://localhost:8000`) })

