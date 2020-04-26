const router = require('express').Router()

router.get('/books', function(req, res){
    res.send('this is a new module')
})

router.post('/newBook', function(req, res){
    res.json({
        msg: 'you have added new book',
        data: req.body,
    })
})

module.exports = router