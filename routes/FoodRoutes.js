const express = require('express')
const router = express.Router()

const FoodController = require('../controllers/Food')

router.post('/new' , FoodController.createFood)
router.get('/' , FoodController.allFood)
router.get('/:id' , FoodController.showFoodDetails)


module.exports = router