const express = require ("express")
const app = express()

app.get("/members", function(req,res){
    var members = [{name: "Siddig"}, {name:"Abdelrhim"}, {name:"Omar"}]
    res.send(members)

})

app.listen(6547)
console.log("Hello")