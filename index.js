// imports
import express from "express"

const app = express();


// routes
app.get("/",function(req, res){
    res.send("hello Server!")
})


// listen server 
app.listen(8000,function(err){console.log(`Server Started at http://localhost:8000`)})

