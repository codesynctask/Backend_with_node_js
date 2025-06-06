// imports
import express from "express"
import {CRUD_ROUTE} from "./routes/CRUD.route.js"
import {PAGE_ROUTE} from './routes/page.route.js';
import {AUTH_ROUTE} from './routes/auth.route.js';
import {connectMongoDB} from "./Databases/connection.js"


const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// view engine
app.set("view engine", "ejs")

// Connection --> MongoDB
connectMongoDB("mongodb+srv://codedeepak:123@cluster0.ayvhvvh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

// routes
app.use("/api/",CRUD_ROUTE)
app.use("/",PAGE_ROUTE)
app.use("/auth/",AUTH_ROUTE)



// listen server 
app.listen(8000, function (err) { console.log(`Server Started at http://localhost:8000`) })

