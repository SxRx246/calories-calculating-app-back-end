const express = require('express');
const router = express.Router();
const FoodPerDayController = require('../controllers/FoodPerDay');

router.post('/add', FoodPerDayController.addFoodForDay);

router.get('/:userId', FoodPerDayController.getFoodForDay);

router.put('/:userId', FoodPerDayController.updateFoodForDay);

router.delete('/:userId/food/:foodId', FoodPerDayController.deleteFoodForDay);

module.exports = router;