const express = require('express');
const router = express.Router();
const FoodPerDayController = require('../controllers/FoodPerDay');

router.post('/new', FoodPerDayController.addFoodForDay);

router.get('/:userId', FoodPerDayController.getFoodForDay);

router.put('/:userId', FoodPerDayController.updateFoodForDay);

router.delete('/:userId', FoodPerDayController.deleteFoodForDay);

module.exports = router;