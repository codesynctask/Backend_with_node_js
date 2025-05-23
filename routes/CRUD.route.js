import express from "express"
import { handleCreateUser, handleShowAllUsers, hanleShowOneUser, handleUpdateUser, handleDeleteUser } from '../controllers/CRUD.controller.js';

export const CRUD_ROUTE = express.Router()

// 1. CREATE
CRUD_ROUTE.route("/")
    .post(handleCreateUser)

// 2. READ
    .get(handleShowAllUsers)


CRUD_ROUTE.route("/:id")
    .get(hanleShowOneUser)

// 3. UPDATE
    .patch(handleUpdateUser)

// 4. DELEET
    .delete(handleDeleteUser)
