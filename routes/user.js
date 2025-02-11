const router = require('express').Router()

const userController = require('../controller/userController')

router.post('/v1/user/register', userController.register)

router.post('/v1/user/signin', userController.signin)

module.exports = router