const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {db_url, options} = require('./config')
const routers = require('./routes')

mongoose.connect(db_url, options, function(error){
    if(error) console.error(error);
    console.log('database connected');
})

app.use(express.json())
app.use(express.urlencoded())
app.use(routers)

app.listen(8080)
console.log('server is running');
