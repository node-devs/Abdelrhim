const express = require ('express')
const app = express()

app.use(function(req, res, next){
console.log(req.ip)
console.log(req.params)
console.log(req.protocol)
console.log(req.query)
console.og(req.hostname)
console.log(req.headers)

next()
})

app.get('/test', function(req,res){
res.json('This is a middle ware test')
})

app.listen(8080)
console.log('server is running ..')
