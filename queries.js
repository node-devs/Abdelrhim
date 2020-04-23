const express = require ('express')
const app = express()

app.get('/data', function(req,res){
    res.send('Hey I am ' + req.query.name + ' I Love ' + req.query.like)
})

app.listen(8080)
console.log('server started..')