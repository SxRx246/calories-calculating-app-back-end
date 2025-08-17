const express = require('express')
const router = express.Router()

const FoodController = require('../controllers/Food')

router.post('/new' , FoodController.createFood)

module.exports = router