const router = require('express').Router()
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {type: String},
    phone: {type: Number},
    email: {type: String},
})

const userModel = mongoose.model('users', userSchema)

router.post('/addUser', function(req, res){
    const data = req.body
    new userModel(data).save()

    res.send('user added')
})

router.get('/getUsers', function(req, res){
    const users = userModel.find().exec()

    users.then((data) => res.json(data))
    users.catch((error) => res.send(error))
})
module.exports = router