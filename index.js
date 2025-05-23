// imports
import express, { urlencoded } from "express"
import {CRUD_ROUTE} from "./routes/CRUD.route.js"
import {PAGE_ROUTE} from './routes/page.route.js';

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));

// view engine
app.set("view engine", "ejs")


// routes
app.use("/api/",CRUD_ROUTE)
app.use("/page/",PAGE_ROUTE)



// listen server 
app.listen(8000, function (err) { console.log(`Server Started at http://localhost:8000`) })

