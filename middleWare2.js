const express = require('express')
const app = express ()

app.use(function(req, res, next){
    console.log(req.ip)
    next()
})

app.get('/books', function(req, res){
    if(true){
        res.json('book data in object')
    }else{
        next()
    }
})

app.use(function(req, res, next){
    //if any error on above route , then :
    res.send('middleware is now working')
})

app.listen(8080)
console.log('server is running ..')
