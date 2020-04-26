const express = require('express')
const routers = require('./routes')
const app = express()

//use json
app.use(express.json())
app.use(express.urlencoded())

//all routers
app.use(routers)

app.listen(8080)
console.log('server is running ..')

