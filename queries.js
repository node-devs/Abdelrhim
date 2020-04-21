const express = require ('express')
const app = express()

app.get('/data', function(req,res){
    res.send('Welcome ' + req.query.name + " You're " + req.query.age
    + " And you're a " + req.query.gander)
})

app.listen(8080)
console.log('server started..')