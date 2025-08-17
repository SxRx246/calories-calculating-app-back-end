const express = require('express')
const router = express.Router()

const UserInfoController = require('../controllers/UserInfo')

router.post('/new' , UserInfoController.createUserInfo)
router.get('/:id' , UserInfoController.showUserInfoDetails)
router.put('/:id',UserInfoController.updateUserInfo)



module.exports = router