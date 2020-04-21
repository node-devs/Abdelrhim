const express = require('express')
const app = express()

app.get('/data/:name/:age/:gander', function(req,res){
    res.send('Welcome ' + req.params.name + " You're " + req.params.age
    + " And you're a " + req.params.gander)
})

app.listen(8080)
console.log('server started')