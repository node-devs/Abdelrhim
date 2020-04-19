const express = require("express")
const app = express()

app.get("/index", function(req,res){
    res.send("I'll Never Forget This Day ..")
})

app.listen(5050)
Console.log("server is running")