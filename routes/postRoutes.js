const express = require('express');
const authController = require('../controller/PostJobController');
// const { verifyToken } = require('../utils/jwt');
const router = express.Router()

router.post('/CreatePost',authController.CreateJob)
// router.post('/login',authController.login)
// router.get('/getUser',authController.getUser)


module.exports = router;