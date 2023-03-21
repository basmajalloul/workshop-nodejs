const router = require("express").Router()

const userController = import("../controller/userController")

router.post("/v1/user/signup", userController.register)  

router.post("/v1/user/signin", userController.signin)

module.exports = router