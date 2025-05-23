import express from "express"
import {showHomePage , showLoginPage, showSignupPage , showProfilePage} from '../controllers/pages.controller.js';

export const PAGE_ROUTE = express.Router()

PAGE_ROUTE.get("/",showHomePage)

PAGE_ROUTE.get("/login",showLoginPage)

PAGE_ROUTE.get("/signup",showSignupPage)

PAGE_ROUTE.get("/profile",showProfilePage)