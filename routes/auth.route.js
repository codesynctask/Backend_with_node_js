import express from "express"
import {handleLogin , handleSignup} from '../controllers/auth.controller.js';

export const AUTH_ROUTE = express.Router()

AUTH_ROUTE.post("/login",handleLogin)

AUTH_ROUTE.post("/signup",handleSignup)
