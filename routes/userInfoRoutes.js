const express = require('express')
const router = express.Router()

const UserInfoController = require('../controllers/UserInfo')

router.post('/new' , UserInfoController.createUserInfo)


module.exports = router